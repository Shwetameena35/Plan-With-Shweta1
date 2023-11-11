import React, { useState } from 'react'

export default function Textform(props) {
 
    const [text , setText] = useState("");
       const convUp = () =>{
        console.log("Button click")
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Convert to upper case", "success");
       }
       const eventHandle = (event) =>{
        console.log("Change");
         setText(event.target.value);
       }
       const convlow = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lower case", "success");
       }
       const cleartex = () =>{
        let newText = '';
        setText(newText);
       }
       const convoice = () =>{

        let utterance = new SpeechSynthesisUtterance();
      
        utterance.text = text;
        utterance.voice = window.speechSynthesis.getVoices()[0];
      
        window.speechSynthesis.speak(utterance);
       }
       const handleCopy = () =>{
              let text = document.getElementById("mybox");
              text.select();
              navigator.clipboard.writeText(text.value);
              document.getSelection().removeAllRanges();
              props.showAlert("Copyto clipboard", "success");
       }
      
  return (
    <>  
    <div className='container my-3' style={{color : (props.mode==='dark')?'#042743':'white'}}>
    <h1 className='mb-2'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={eventHandle}  style={{backgroundColor : props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
  <button disabled={text.length===0} className="btn btn-primary" onClick = {convUp}>Convert into Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {convlow}>Convert into Lower Case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {convlow}>Convert into Lower Case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {convoice}>For Voice</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {cleartex}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleCopy}>Copy to clipboard</button>
 
    </div>
    <div className='container my-3' style={{color : props.mode==='dark'?'#042743':'white'}}>
      <h1>
        Your text Summary
      </h1>
      <p>
        {text.split(" ").filter((element)=>{ return element.length!==0}).length} Words and {text.length} Characters
      </p>
      <p>
        {0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes Read
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview"}</p>

    </div>
    </>
  )
}
