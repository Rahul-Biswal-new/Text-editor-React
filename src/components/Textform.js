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
    <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            {/* <label htmlFor="" className='form-label'>Example textarea</label> */}
            <textarea className='form-control' onChange={handleOnChange} value={text} name="textarea" id="myBox" rows="8"></textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>

        </div>
    </div>
  )
}
