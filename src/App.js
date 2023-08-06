// import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { light } from '@mui/material/styles/createPalette';

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode=()=>{
    if (mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
  }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="Textutils" About="About" mode={mode} toggleMode={toggleMode}/>
    
    {/* <Navbar/> */}
    <div className="container my-2">
    <TextForm heading="Enter Your text to Analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
