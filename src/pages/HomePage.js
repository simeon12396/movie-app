import React from 'react';
import '../scss/pages/HomePage.scss';
import HeaderComp from '../components/HeaderComp.js';
import UpcomingMoviesComp from '../components/UpcomingMoviesComp.js';
import NowPlayingMoviesComp from '../components/NowPlayingMoviesComp.js';
import PopularMoviesComp from '../components/PopularMoviesComp.js';
import TopRatedMoviesComp from '../components/TopRatedMoviesComp.js';
import LatestMoviesComp from '../components/LatestMoviesComp.js';

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
                    <LatestMoviesComp/>
                </div>
            </main>
        </div>
    );
};

export default HomePage;