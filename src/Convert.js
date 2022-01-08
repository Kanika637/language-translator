import React, { useState, useEffect } from "react"
import axios from "axios"

// de-structure language and text props
const Convert = ({ language, text }) => {
    const[results,setResults]=useState("")


  useEffect(() => {
      const translate=async()=>{
          const translation=await axios.post("https://translation.googleapis.com/language/translate/v2",
          {},
          {
              params:{
                  q:text,
                  target:language.value,
                  key:"AIzaSyBZhRxfgBcLsiL7HaRbx77WPaKzswo3S-k",
              },
          }
          )
          setResults(translation.data.data.translations[0].translatedText)
      }
      translate()
    },[language,text])
   

  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default Convert