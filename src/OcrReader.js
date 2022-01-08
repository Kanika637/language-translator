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

      await worker.loadLanguage('eng+spa+chi_sim+jpn+kor+por+tam+tel+kan+san+fra+ita+rus+ara+ben');
      await worker.initialize('eng+spa+chi_sim+jpn+kor+por+tam+tel+kan+san+fra+ita+rus+ara+ben');
      // await worker.initialize('eng+spa');
      // await worker.initialize('spa');
      // await worker.loadLanguage("eng")
      // await worker.initialize("eng")
      // await worker.loadLanguage("eng")
      // await worker.initialize("eng")
      // await worker.loadLanguage("chi_sim")
      // await worker.initialize("chi_sim")
      // await worker.loadLanguage("jpn")
      // await worker.initialize("jpn")
      // await worker.loadLanguage("kor")
      // await worker.initialize("kor")
      // await worker.loadLanguage("por")
      // await worker.initialize("por")
      // await worker.loadLanguage("tam")
      // await worker.initialize("tam")
      // await worker.loadLanguage("tel")
      // await worker.initialize("tel")
      // await worker.loadLanguage("kan")
      // await worker.initialize("kan")
      // await worker.loadLanguage("san")
      // await worker.initialize("san")
      // await worker.loadLanguage("fra")
      // await worker.initialize("fra")
      // await worker.loadLanguage("ita")
      // await worker.initialize("ita")
      // await worker.loadLanguage("rus")
      // await worker.initialize("rus")
      // await worker.loadLanguage("ara")
      // await worker.initialize("ara")
      // await worker.loadLanguage("ben")
      // await worker.initialize("ben")
      // await worker.loadLanguage("nld")
      // await worker.initialize("nld")
      // await worker.loadLanguage("grc")
      // await worker.initialize("grc")
      // await worker.loadLanguage("lat")
      // await worker.initialize("lat")
      // await worker.loadLanguage("guj")
      // await worker.initialize("guj")
      // await worker.loadLanguage("mya")
      // await worker.initialize("mya")
      // await worker.loadLanguage("spa")
      // await worker.initialize("spa")
      // await worker.loadLanguage("sin")
      // await worker.initialize("sin")
      // await worker.loadLanguage("ori")
      // await worker.initialize("ori")
      // await worker.loadLanguage("urd")
      // await worker.initialize("urd")
      // await worker.loadLanguage("mal")
      // await worker.initialize("mal")
      // await worker.loadLanguage("mar")
      // await worker.initialize("mar")
      // await worker.loadLanguage("nep")
      // await worker.initialize("nep")
      // await worker.loadLanguage("tha")
      // await worker.initialize("tha")
      // await worker.loadLanguage("pan")
      // await worker.initialize("pan")

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