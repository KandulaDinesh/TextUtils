import React, { useState } from 'react'
// import { useSpeechSynthesis } from 'react-speech-kit';
export default function TextForm(props) {
    const handleUpper=()=>{
        let a=text.toUpperCase();
        setText(a)
    }
    const handleLower=()=>{
        let a=text.toLowerCase();
        setText(a)
    }
    const handleClear=()=>{
        setText("");
    }

    const handleSpeech = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const handleCopy=()=>{
        let text=document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)

      }

    const handleOnchange=(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");

  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
    <div className='mb-3'>
      <h1>{props.heading}</h1>
    <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'#052c65'}}></textarea>
    </div>
        <button className="btn btn-primary mx-2" onClick={handleUpper}> Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLower}> Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}> Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpeech}> Text to Speech</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>Your Text Summary</h3>
        <p>{text.trim().split(" ").length} Words and {text.replace(/\s+/g, '').length} Characters</p>
        <p>{0.008*text.trim().split("").length} Minutes to read text</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter the text to Preview"}</p>
    </div>
    </>
  )
}
