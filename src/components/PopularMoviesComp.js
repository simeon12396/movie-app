import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchPopularMovies} from '../helpers/requests.js';
import ParticularMovies from '../layouts/ParticularMovies.js';

const PopularMoviesComp = () => {

    const movies = useFetchPopularMovies('https://api.themoviedb.org/3/movie/popular?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');

    localStorage.setItem('popularMovies', JSON.stringify(movies));
    console.log(movies)
    return(
        <div className="popular-movies-comp">
            <ParticularMovies movies={movies} typeOfMovies='Popular Movies' routePath='/category/popular-movies'/>
        </div>
    );
};

export default PopularMoviesComp;