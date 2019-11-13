import React from 'react';
import AllParticularMovies from '../layouts/AllParticularMovies.js';

const AllNowPlayingMoviesPage = () => {
    const getAllNowPlayingMovies = JSON.parse(localStorage.getItem('nowPlayingMovies'));

    return(
        <div className="all-now-playing-movies-page">
            <AllParticularMovies allMovies={getAllNowPlayingMovies} />
        </div>
    );
};

export default AllNowPlayingMoviesPage;