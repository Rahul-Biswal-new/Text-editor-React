import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <div>
     <Navbar title="Textutils" Abouttext="about"/>
     <div className='container my-3'>
     <Textform heading="enter text to analyze"/>
     </div>
    </div>
  );
}

export default App;
