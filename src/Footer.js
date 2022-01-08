import React from "react"
import "./Footer.css"
import { FaLanguage } from "react-icons/fa";

const Footer = () => {
    return ( 

<div className="footer">
        <h2 className="footer-head">ACROSS THE WORLD</h2>
        <hr className="line"></hr>
        <h1 className="title">LANGUAGE TRANSLATOR</h1>
        <div className="icons">
        <FaLanguage/>
        </div>
      <div className="main-content">
        <div className="container-1">
        <h2 className="f-format">FILE FORMATS SUPPORTED</h2>
        <p className="png">
          Jpg <br></br>
          Png <br></br>
          Pbm <br></br>
          Jpeg <br></br>
          Wav
        </p>
        </div>

        <div className="container-2">
          <h2 className="l-format">LANGUAGES SUPPORTED</h2>
          <div className="languages">
          <div className="language-1">
            <p>
          English <br></br>
          Spanish <br></br>
          Chinese <br></br>
          Japanese <br></br>
          Korean <br></br>
          Portuguese<br></br>
          French <br></br>
          Italian 
          </p>
          </div>
        <div className="language-2">
          <p>
          Russian <br></br>
          Arabic <br></br>
          German <br></br>
          Hindi <br></br>
          Polish <br></br>
          Turkish <br></br>
          Ukrainian <br></br>
          Vietnamese 
        </p>
        </div>
        </div>
        </div>
      </div>
      </div>
    )}
    
    export default Footer