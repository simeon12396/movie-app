import React from 'react';
import AllParticularMovies from '../layouts/AllParticularMovies.js';

const AllPopularMoviesPage = () => {

    const getAllPopularMovies = JSON.parse(localStorage.getItem('popularMovies'));

    return(
        <div className="all-top-rated-movies-page">
            <AllParticularMovies allMovies={getAllPopularMovies} />
        </div>
    );
};

export default AllPopularMoviesPage;