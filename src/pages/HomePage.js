import React from 'react';
import '../scss/pages/HomePage.scss';
import HeaderComp from '../components/HeaderComp.js';
import UpcomingMovies from '../components/UpcomingMovies.js';
import NowPlayingMovies from '../components/NowPlayingMovies';

const HomePage = () => {
    return(
        <div className='home-page'>
            <HeaderComp/>
            
            <main>
                <UpcomingMovies/>
                
                <div className="out-focus container-fluid">
                    <NowPlayingMovies/>
                </div>
            </main>
        </div>
    );
};

export default HomePage;