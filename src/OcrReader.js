import { useState } from "react"
import { createWorker } from "tesseract.js"
import './OcrReader.css';

// OCR Statuses
const STATUSES = {
  IDLE: "",
  FAILED: "Failed to perform OCR",
  PENDING: "Processing...",
  SUCCEEDED: "OCR processing complete",
}

function OcrReader({onReadOcrData, onRemoveClicked}) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [ocrState, setOcrState] = useState(STATUSES.IDLE)
  const worker = createWorker()
  
  // Process image with OCR
  const readImageText = async() => {
    setOcrState(STATUSES.PENDING)
    try {
      await worker.load()
      // Set the language to recognize

      await worker.loadLanguage('eng + spa + chi_sim + jpn + kor + por + fra + ita + rus + ara + fin + fra + deu + hin + hun + ind + gle + pol + swe + tur + ukr + vie');
      await worker.initialize('eng + spa + chi_sim + jpn + kor + por  + fra + ita + rus + ara + fin + fra + deu + hin + hun + ind + gle + pol + swe + tur + ukr + vie');
      

      const { data: { text } } = await worker.recognize(selectedImage) 
      await worker.terminate()

      onReadOcrData(text)
      setOcrState(STATUSES.SUCCEEDED)
    } catch (err) {
      setOcrState(STATUSES.FAILED)
    }
  }

  // Executed when "Use another image" is selected
  const handleRemoveClicked = () => {
    setSelectedImage(null)
    onRemoveClicked()
    setOcrState(STATUSES.IDLE)
  }

  return (
    <div>
      {selectedImage && (
        <div>
          <img className="image" src={URL.createObjectURL(selectedImage)} alt="scanned file"  />
        </div>
      )}
      <div>
        {selectedImage?
          <div className="button-container">
            <button className="ocr-button" onClick={readImageText}>Recognize the Text</button>
            <button
              className="remove-button"
              disabled={ocrState === STATUSES.PENDING}
              onClick={handleRemoveClicked}
            >
                Use another image
            </button>
          </div>
          :
          <>
            <h3 className="upload">Upload an Image to Convert</h3>
            <input className="choose-file"
              type="file"
              name="ocr-image"
              onChange={(event) => {
                setSelectedImage(event.target.files[0])
              }}
            />
            {/* <p className="para-1"><span className="head-1">Supported Formats: </span>bmp, jpg, png, pbm</p>
            <p className="para-2"><span className="head-2">Supported Languages: </span>English, Hindi, Chinese, French, Tamil, Telugu, Marathi, Spanish, Turkish, Greek, Urdu, Gujrati, Nepali.</p> */}
          </>
        }
      </div>
      <div className="status">
        {ocrState}
      </div>
      <br />
    </div>
  )  
}

export default OcrReader