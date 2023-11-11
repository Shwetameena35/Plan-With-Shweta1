import React , { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
 
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";


function App() {
  const [Mode , setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert = (message, type) =>{
          setAlert({
            msg:message,
            type:type
          })
          setTimeout(() => {
            setAlert(null);
          }, 2000);
 }
  const toogleMode = () =>{
    if(Mode === 'light')
    {
      setMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark mode has been enabled" , "success");
     document.title = "TextUtils - Dark mode";
     setInterval(()=>{
      document.title = "TextUtils is Amazing Mode";
     },2000)
     setInterval(()=>{
      document.title = "Install TextUtils now";
     },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
    <BrowserRouter>

    <Navbar title="TextUtils" aboutText = "About Us" mode={Mode} toogleMode={toogleMode}></Navbar>
    <Alert alert = {alert}></Alert>
    <div className='container my-3'>
    <Routes>
          <Route  path="/about"
           element= {<About mode = {Mode}/>} >
          </Route>
          <Route path="/"
           element =  {
            <Textform showAlert = {showAlert} heading = "Try TextUtils - Word Counter , Charcter Counter " Mode = {Mode}></Textform>
           }> 
         </Route> 
  
        </Routes>
        </div>
            </BrowserRouter>
    </>
  );
}

export default App;
