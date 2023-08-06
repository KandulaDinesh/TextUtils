import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
    <Router>
    <Navbar title="Textutils" About="About" mode={mode} toggleMode={toggleMode}/>
    
    {/* <Navbar/> */}
    <div className="container my-2">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading="Enter Your text to Analyze" mode={mode}/>
          </Route>
    </Switch>
    
    </div>
    </Router>
    </>
  );
}

export default App;
