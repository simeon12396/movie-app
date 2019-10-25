import React from 'react';
import '../src/scss/base/_reset.scss';
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMoviesPage from './pages/AllMoviesPage.js';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/all-movies" component={AllMoviesPage} />  
          </Switch>
        </Router>
    </div>
  );
};

export default App;
