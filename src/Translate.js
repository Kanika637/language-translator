import React, { useState, useEffect } from 'react';
import "./translate.css"
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';
import axios from 'axios';

function Translate() {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('')
    const [languagesList, setLanguagesList] = useState([])
    const [detectLanguageKey, setdetectedLanguageKey] = useState('')
    
    
    const getLanguageSource = () => {

        //DETECT LANGUAGE
        
        axios.post("https://ws.detectlanguage.com/0.2/detect?key=c4d66cf931d36717036a070b016158ce",
         {
            q: inputText
    })
            
        .then((response) => {
            setdetectedLanguageKey(response.data);
        //   console.log(response.data);
        })
    }
    const translateText = () => {
        setResultText(inputText)

        getLanguageSource();

        let data = {
            q : inputText,
            source: detectLanguageKey,
            target: selectedLanguageKey
        }

        // FINAL TRANSLATE

        axios.post("https://libretranslate.de/translate?q=%E3%81%AF%E3%81%84&source=ja&target=en",
        {
            q : inputText,
            source: detectLanguageKey,
            target: selectedLanguageKey
        })
        .then((response) => {
            setResultText(response.data.translatedText)
            // console.log(response.data.translatedText)
        })
    }

    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    //LANGUAGES LIST

    useEffect(() => {
       axios.get('https://libretranslate.com/languages')
       .then((response) => {
        setLanguagesList(response.data)
        
       })

       getLanguageSource()
    }, [inputText])
    return (
        <div>
            <div className="app-header">
                <h2 className="header">Translator</h2>
            </div>

            <div className='app-body'>
                <div>
                    <Form>
                        <Form.Field
                            control={TextArea}
                            placeholder='Type Text to Translate..'
                            onChange={(e) => setInputText(e.target.value)}
                        />

                        <select className="language-select" onChange={languageKey}>
                            <option>Please Select Language..</option>
                            {languagesList.map((language) => {
                                return (
                                    <option value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            })}
                        </select>

                        <Form.Field
                            control={TextArea}
                            placeholder='Your Result Translation..'
                            value={resultText}
                        />

                        <Button 
                            color="orange" 
                            size="large" 
                            onClick={translateText}
                        >
                            <Icon name='translate' />
                            Translate</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Translate;