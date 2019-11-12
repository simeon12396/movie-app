import React, {useState, useEffect} from 'react';
import '../scss/pages/HomePage.scss';
import HeaderComp from '../components/HeaderComp.js';
import UpcomingMoviesComp from '../components/UpcomingMoviesComp.js';
import NowPlayingMoviesComp from '../components/NowPlayingMoviesComp.js';
import PopularMoviesComp from '../components/PopularMoviesComp.js';
import TopRatedMoviesComp from '../components/TopRatedMoviesComp.js';
import PopularTvShowsComp from '../components/PopularTvShowsComp.js'
import TopRatedTvShowsComp from '../components/TopRatedTvShowsComp.js';
import OnTheAirTvShowsComp from '../components/OnTheAirTvShowsComp.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {useScrollEffect, handleScrollToTop} from '../helpers/methodsAndHooks.js';

const HomePage = () => {
    useScrollEffect();
    handleScrollToTop();

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

                <div className="scroll-to-top" onClick={handleScrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            </main>
        </div>
    );
};

export default HomePage;