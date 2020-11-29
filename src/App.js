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

import fire from './components/fire.js'
import Login from './components/Login.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }


  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }
  render() 
  {
      return (
        <div className="App">
 
            <MyHeader />
            <UpperLeft /> 
             {this.state.user ? (<> 
  
             <Home /> </>) : ( <Login /> ) }


        </div>
      );
  }
}

export default App;



