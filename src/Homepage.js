import React, { useState } from 'react';
import OcrReader from "./OcrReader"
import Copy from "./Copy"
import './Homepage.css';
import Footer from "./Footer"
 
function Homepage() {
  const [ocrData, setOcrData] = useState("")

  // Receive OCR data as a prop from the child component
  const onReadOcrData = (ocrData) => {
    setOcrData(ocrData)
  }

  // Prop detects that the change image button was clicked
  const onRemoveClicked = () => {
    setOcrData("")
  }

  return (
  <div className="App">
      
      <div className="content">
      <header className="heading"><span className='head-main'>LANGUAGE TRANSLATOR</span></header>
      
      <OcrReader onReadOcrData={onReadOcrData} onRemoveClicked={onRemoveClicked}
      />
      {ocrData && <Copy readText={ocrData}/>}
      </div>
    <Footer/>   
    </div>
    
  );
};

export default Homepage;