import React from 'react';
import '../src/scss/base/_reset.scss';
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} /> 
          </Switch>
        </Router>
    </div>
  );
};

export default App;
