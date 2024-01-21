// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// const text = "<h4>Hello World!! to everyone</h4>"
// const text = <h2>Hello World!! to everyone</h2>
 
// js variable used in {} braces
function App() {
  const [mode , setMode] = useState('light')
  const [alert , setAlert] = useState(null);

  const changeGreen = () =>{
    document.body.style.backgroundColor = 'green';
  }
  const changeColor = () =>{
    document.body.style.backgroundColor = '#6c757d';
  }
  const changePink = () =>{
    document.body.style.backgroundColor = 'pink';
  }


  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=> {
      setAlert(null)
    },1200)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1D5B79'
      showAlert('Enabling Dark Mode','success')
      // document.title = 'TextUtils Dark-Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Enabling light Mode','success')
      // document.title = 'TextUtils Light-Mode'
    }
  }
  return (
    <>
    <Router>
    <Navbar title='Text Utils' about='About' mode={mode} toggleMode={toggleMode} changeGreen={changeGreen} 
      changePink={changePink} changeColor={changeColor}/>
      <Alert alert={alert} />
     <Routes>
          <Route path="/about" element = {<About mode={mode}/>}>
          </Route>
          <Route path="/"  element = {<TextForm heading="Enter your Text Here: " mode={mode} showAlert={showAlert}/>} >     
          {/* <About/> */}
          </Route>
        </Routes>
{/* <Navbar/> */} 
    
    </Router>
    </>
  );
}
export default App;

