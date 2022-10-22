import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleUpClick =(event) =>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () =>{
        let newText1 = text.toLowerCase();
        setText(newText1)
    }
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            {/* <label htmlFor="" className='form-label'>Example textarea</label> */}
            <textarea className='form-control' onChange={handleOnChange} value={text} name="textarea" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p> {text} </p>
    </div>
    </>
  )
};
