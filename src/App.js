import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


export default function App() {

  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="grey"
      document.body.style.color="white"
      document.title="CusFirst- Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="grey"
      document.title= "CusFirst- Light Mode"
    }
  }

  return (
    <div className="container">
    <Navbar title="Cusfirst" mode={mode} toggleMode={toggleMode} />
    <Alert mode={mode} toggleMode={toggleMode}/>
    <TextForm mode={mode} toggleMode={toggleMode}/>
    <About mode={mode} toggleMode={toggleMode}/>
    </div>
  );
}