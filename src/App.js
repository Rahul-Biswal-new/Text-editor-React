import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);           // alert is object
  const showAlert = (message, type) => {
    setalert({  
      type: type,
      msg: message,
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  };
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Drk mode has been enabled" , "success");
      document.title = "Text editor - Dark mode";
      setInterval(() => {
      document.title = "Text editor is amazings mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install text editor now";
        }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "sucess");
      document.title = "Text editor - light mode";
    }
  };

  return (
    <div>
      <Navbar
        title="Textutils"
        Abouttext="about"
        mode={Mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="enter text to analyze" mode={Mode}/>
        <About  mode={Mode}/>
      </div>
    </div>
  );
}

export default App;

//  complete state of website will be managed from react state
// toggle mode function is going to navbar , but it is actually in app.js

// npm install react-router-dom


// we create function in one components(app.js) and we can xhare it with 
// another components bit giving it as parameter inside <> ex:- toogleStyle={toogleStyle}
// and in the targeted component we can use as props.toogleStyle  ex= onClick={props.toogleStyle}