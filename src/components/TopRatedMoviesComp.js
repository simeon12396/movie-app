import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchTopRatedMovies} from '../helpers/requests.js';
import ParticularMovies from '../layouts/ParticularMovies.js';

const TopRatedMoviesComp = () => {
    const movies = useFetchTopRatedMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');

    localStorage.setItem('topRatedMovies', JSON.stringify(movies));

    return(
        <div className="top-rated-movies-comp">
            <ParticularMovies movies={movies} typeOfMovies='Top Rated Movies' routePath='/category/top-rated-movies'/>
        </div>
    );
};

export default TopRatedMoviesComp;