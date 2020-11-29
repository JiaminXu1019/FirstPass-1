import React from 'react';
import './App.css';
import './fonts/Poligon-Family/Poligon Medium.otf'
import './fonts/Poligon-Family/Poligon Light.otf'
import Home from './components/Home.js';
import UpperLeft from './components/upperLeft';
import MyHeader from './components/myHeader.js';
import './components/myHeader.css'
import './components/Login.js'
import './components/Home.css'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }


  render() 
  {
      return (
        <div className="App">
 
            <MyHeader />
            <UpperLeft /> 
             <Home /> 

        </div>
      );
  }
}

export default App;



