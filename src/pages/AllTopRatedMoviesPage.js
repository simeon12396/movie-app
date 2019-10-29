import React from 'react';
import AllParticularMovies from '../layouts/AllParticularMovies.js';

const AllTopRatedMoviesPage = () => {
    const getAllTopRatedMovies = JSON.parse(localStorage.getItem('topRatedMovies'));

    return(
        <div className="all-top-rated-movies-page">
            <AllParticularMovies allMovies={getAllTopRatedMovies} />
        </div>
    );
};

export default AllTopRatedMoviesPage;