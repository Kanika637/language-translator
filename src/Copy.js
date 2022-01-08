import { useEffect, useState, useRef } from "react"
import './copy.css';
// import "intl-tel-input/build/css/intlTelInput.css"
// import intlTelInput from "intl-tel-input"

// SMS sending statuses
const STATUSES = {
  IDLE: "",
  FAILED: "Failed to copy",
  PENDING: "Copying...",
  SUCCEEDED: "Finished copying",
}




function Copy ({readText}) {
  const [smsText, setSmsText] = useState(readText)
//   const [iti, setIti] = useState(null)
  const [smsSendingStatus, setSmsSendingStatus] = useState(STATUSES.IDLE)
  const inputRef = useRef(null)

 

  // Send SMS when the send button is clicked
  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    // sendSMS()
  }

 
 const output=document.querySelector(".text_input");

const copyText=(e)=>{
  e.preventDefault()
  output.select();
  output.setSelectionRange(0,999999999999999999);
  document.execCommand("copy");
};


return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <textarea
            rows="15"
            cols="45"
            name="name"
            defaultValue={readText}
            className="text_input"
            onChange={e => setSmsText(e.target.value)}
          />
        </div>
        
        <div>
          <button className="copy_button" onClick={copyText} disabled={smsSendingStatus == "Copying..."} type="submit">Copy</button>
        </div>
      </form>
      <div className="status">
        {smsSendingStatus}
      </div>
    </div>
  )
}

export default Copy