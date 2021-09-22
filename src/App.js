import About from './Components/About';
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Homepage from './Components/Homepage';

function App() {
  return (
    <Router>
    <Navbar name = "Gaurav Thakur"/>
    <div className="App">
      <Switch>  
          <Route exact path="/">
              <Homepage/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/form">
            <Contact/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
