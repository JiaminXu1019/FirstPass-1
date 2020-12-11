import React from 'react';
import './App.css';
import './fonts/Poligon-Family/Poligon Medium.otf'
import './fonts/Poligon-Family/Poligon Light.otf'
import Home from './components/Home.js';
import UpperLeft from './components/upperLeft';
import MyHeader from './components/myHeader.js';
import Profile from './components/Profile.js';
import Feedback from './components/Feedback.js'
import './components/myHeader.css'
import './components/Login.js'
import './components/Home.css'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

const ProfileRouted = withRouter(Profile);
const FeedbackRouted = withRouter(Feedback);

function App() {
      return (
        <div className="App">
            <Router>
              <Route exact path='/' component={MyHeader}/>
              <Route exact path='/' component={UpperLeft}/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/profile' component={ProfileRouted}/>
              <Route exact path='/feedback' component={FeedbackRouted}/>
            </Router>
        </div>
      )
}

export default App;



