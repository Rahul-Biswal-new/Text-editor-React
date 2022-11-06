import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick =(event) =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upperCase", "success" );
    }
    const handleLowClick = () =>{
        let newText1 = text.toLowerCase();
        setText(newText1)
        props.showAlert("converted to lowerCase", "success" );
    }
    const handleClearClick = () =>{
        setText("");
        props.showAlert("Text cleared", "success" );
    }
    const handleCopy = () => {
        var texter = document.getElementById("myBox");
        texter.select();
        texter.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(texter.value);
        props.showAlert("text copied to clipBoard", "success" );
    }
    const handleExtraSpaces= () =>{
        let newText = text.split(/[ ]+ /);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success" );
    }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            {/* <label htmlFor="" className='form-label'>Example textarea</label> */}
            <textarea className='form-control' style={{backgroundColor: props.mode === 'dark'? '#13466e': 'light',color: props.mode === 'dark'? 'white': 'black'}} onChange={handleOnChange} value={text} name="textarea" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Handle Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white': '#042743'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes read</p>
        <h2>preview</h2>
        <p> {text.length>0?text : "Enter Something to preview"} </p>
    </div>
    </>
  )
};
