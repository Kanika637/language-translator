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
        <h2 className="f-format">File Format Supported</h2>
        <p className="png">
          JPG <br></br>
          PNG <br></br>
          PBM <br></br>
          JPEG <br></br>
          WAV
        </p>
        </div>

        <div className="container-2">
          <h2 className="l-format">Languages Supported</h2>
          <div className="languages">
          <div className="language-1">
            <p>
          HINDI <br></br>
          ENGLISH <br></br>
          FRENCH <br></br>
          CHINESE <br></br>
          TAMIL <br></br>
          TELUGU <br></br>
          MARATHI <br></br>
          </p>
          </div>
        <div className="language-2">
          <p>
          SPANISH <br></br>
          TURKISH <br></br>
          GREEK <br></br>
          URDU <br></br>
          GUJRATI <br></br>
          NEPALI <br></br>
          AND MANY MORE 
        </p>
        </div>
        </div>
        </div>
      </div>
      </div>
    )}
    
    export default Footer