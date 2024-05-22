// import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
// import React from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  //Alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#054754';
      showAlert("Dark mode has been Enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }
  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText="About"/> */}
    <BrowserRouter>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <Routes>
            <Route exact path="/about" element = {<About mode = {mode}/>}/>
            <Route exact path="/" element={<TextForm mode = {mode} showAlert = {showAlert}/>} />
              
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
