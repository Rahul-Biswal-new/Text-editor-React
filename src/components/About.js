import React from "react";
// import { useState } from "react";
export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
    //   color: "white",
    //   backgroundColor: "black",
    // });

    let myStyle = {
      color: props.mode === "dark"?"white": "#042743",
      // backgroundColor: props.mode === "dark"? "black": "white"
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    }

    // const [btnText, setbtnText] = useState("Enable Light Mode")
  // const toogleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Dark Mode")
  //   } else {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: '2px solid white'
  //     });
  //     setbtnText("Enable Light Mode");
  //   }
  // };

  return (
    <div classNameName="container" style={myStyle}>
      <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text editor gives a way to analyze your text.</strong> quickly and
               efficiently. Be it word count , character count or
            
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Text editor is free character counter tool</strong>that provides
              instant character count and word count statistic for a given text.  
              text utils gives the numbers of word and characters. Thus it is 
              suitable for writing text with word/ vharacter limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>

              <strong>This word counter software works in any browser</strong>  such as 
              Crome , Firefox ,Safari, Opera.  It suits to count character in facebook, blog,
              books, excel documents, pdf documents etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <button type="button" onClick={toogleStyle} class="btn btn-primary my-2">
          {btnText}
        </button> */}
      </div>
    </div>
  );
}
