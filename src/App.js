import React from 'react';
import './App.css';
import './fonts/Poligon-Family/Poligon Medium.otf'
import './fonts/Poligon-Family/Poligon Light.otf'
import Home from './components/Home.js';
import UpperLeft from './components/upperLeft';
import MyHeader from './components/myHeader.js';
import './components/myHeader.css'
import './components/Home.css'


function App() {
  return (
    <div className="App">
        <MyHeader />

        <UpperLeft />

        {/* <div className="radio-buttons">
          <div className="box">
            <p id="radion-button-title">Standing</p>
            <StandingRadioButton />
          </div>
          <div className="box" id="dropdown"><ClassDropdown /></div>
        </div> */}
        <Home />
    </div>
  );
}

export default App;



