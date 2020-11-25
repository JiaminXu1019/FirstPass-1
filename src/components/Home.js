import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import UpperLeft from './upperLeft';
import MyHeader from './myHeader.js';
import Checkboxes from './checkbox.js';
import ClassDropdown from './classDropdown.js'
import StandingRadioButton from './standing-radio-button.js'
import QuarterRadioButton from './quarter-radio-button.js'
import './myHeader.css'
import './Home.css'


const Home = () => {
    return (
        <div>
          <MyHeader />

          <UpperLeft />

          {/* <Checkboxes /> */}

          <div className="radio-buttons">
            <div className="box">
              <div className="radion-button-title">Standing</div>
              <StandingRadioButton />
            </div>
            <div className="box"><ClassDropdown /></div>
            <div className="box">
              <div className="radion-button-title">Quarter</div>
              <QuarterRadioButton />
            </div>
          </div>
        </div>
      );
}

export default Home