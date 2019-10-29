import React from 'react';
import '../src/scss/base/_reset.scss';
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMoviesPage from './pages/AllMoviesPage.js';
import AllNowPlayingMoviesPage from './pages/AllNowPlayingMoviesPage.js';
import AllTopRatedMoviesPage from './pages/AllTopRatedMoviesPage.js';
import AllPopularMoviesPage from './pages/AllPopularMoviesPage.js';
import AllPopularTvShowsPage from './pages/AllPopularTvShowsPage.js';
import AllTopRatedTvShowsPage from './pages/AllTopRatedTvShowsPage.js';
import AllOnTheAirTvShowsPage from './pages/AllOnTheAirTvShowsPage.js';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/all-movies" component={AllMoviesPage} />  
            <Route path="/category/now-playing-movies" component={AllNowPlayingMoviesPage} />
            <Route path="/category/top-rated-movies" component={AllTopRatedMoviesPage} />
            <Route path="/category/popular-movies" component={AllPopularMoviesPage} />
            <Route path="/category/popular-tv-shows" component={AllPopularTvShowsPage} />
            <Route path="/category/top-rated-tv-shows" component={AllTopRatedTvShowsPage} />
            <Route path="/category/on-the-air-tv-shows" component={AllOnTheAirTvShowsPage} />
          </Switch>
        </Router>
    </div>
  );
};

export default App;
