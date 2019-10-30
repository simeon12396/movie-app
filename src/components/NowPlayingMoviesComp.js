import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchNowPlayingMovies} from '../helpers/requests.js';
import ParticularMovies from '../layouts/ParticularMovies.js';

const NowPlayingMoviesComp = () => {
    const movies = useFetchNowPlayingMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');
    console.log(movies)
    localStorage.setItem('nowPlayingMovies', JSON.stringify(movies));

    return(
        <div className="now-playing-movies-comp">
            <ParticularMovies movies={movies} typeOfMovies='Now Playing Movies' routePath='/category/now-playing-movies' />
         </div>
    );
};

export default NowPlayingMoviesComp;