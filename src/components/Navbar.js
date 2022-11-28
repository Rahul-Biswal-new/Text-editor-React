// import { useState } from "react"
import React from 'react'
// import propTypes from 'prop-types'
export default function Navbar(props) {
    // const title = props;
    // const [color, setcolor] = useState("dark");
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
  <a className="navbar-brand" href="/">{props.title}</a>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.Abouttext}</a>
      </li> 
    </ul>
    <div className="d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width: '30px'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width: '30px'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width: '30px'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width: '30px'}}></div>
      <div className="bg-white rounded mx-2" onClick={()=>{props.toggleMode('white')}} style={{height: '30px', width: '80px', textAlign:'center'}}>Reset</div>

    </div>
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}
      
    {/* <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
    <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark mode</label>
  </div> */}
  </div>
</div>
</nav>
    </div>
  )
}

// Navbar.defaultProps ={
//     title: "set title here",
//     Abouttext: "about text here"
// }