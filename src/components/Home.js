import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import UpperLeft from './upperLeft';
import MyHeader from './myHeader.js';
import Checkboxes from './checkbox.js';
import ClassDropdown from './classDropdown.js'
import './myHeader.css'



const Home = () => {
    return (
        <div>
          <MyHeader />

          <UpperLeft />

          <Checkboxes />

          <ClassDropdown />

        </div>
      );
}

export default Home