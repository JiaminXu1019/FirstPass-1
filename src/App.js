import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './fonts/Poligon-Family/Poligon Medium.otf'
import './fonts/Poligon-Family/Poligon Light.otf'
import Home from './components/Home.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>

          <Switch>
            <Route path="/" component={Home} exact />

          </Switch>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



