import React from 'react';
import '../scss/pages/HomePage.scss';
import HeaderComp from '../components/HeaderComp.js';
import UpcomingMoviesComp from '../components/UpcomingMoviesComp.js';
import NowPlayingMoviesComp from '../components/NowPlayingMoviesComp.js';
import PopularMoviesComp from '../components/PopularMoviesComp.js';
import TopRatedMoviesComp from '../components/TopRatedMoviesComp.js';
import PopularTvShowsComp from '../components/PopularTvShowsComp.js'
import TopRatedTvShowsComp from '../components/TopRatedTvShowsComp.js';
import OnTheAirTvShowsComp from '../components/OnTheAirTvShowsComp.js';
import ScrollUpButton from "react-scroll-up-button";

const HomePage = () => {

    return(
        <div className='home-page'>
            <HeaderComp/>
            
            <main>
                <UpcomingMoviesComp/>
                
                <div className="out-focus container-fluid">
                    <NowPlayingMoviesComp/>
                    <TopRatedMoviesComp/>
                    <PopularMoviesComp/>
                    <PopularTvShowsComp/>
                    <TopRatedTvShowsComp/>
                    <OnTheAirTvShowsComp/>
                </div>
            </main>

            <ScrollUpButton />
        </div>
    );
};

export default HomePage;