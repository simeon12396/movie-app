import React from 'react';
import {useFetchMovies as useFetchLatestMovies} from '../helpers/requests.js';
import ParticularMovies from '../layouts/ParticularMovies.js';

const PopularMoviesComp = () => {

    const movies = useFetchLatestMovies('https://api.themoviedb.org/3/movie/popular?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');

    return(
        <div className="latest-movies-comp">
            <ParticularMovies movies={movies} typeOfMovies='Latest Movies' />
        </div>
    );
};

export default PopularMoviesComp;