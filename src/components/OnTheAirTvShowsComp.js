import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchOnTheAirShows} from '../helpers/requests.js';
import ParticularTvShows from '../layouts/ParticularTvShows.js';

const OnTheAirTvShowsComp = () => {
    const tvShows = useFetchOnTheAirShows('https://api.themoviedb.org/3/tv/on_the_air?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');

    localStorage.setItem('onTheAirTvShows', JSON.stringify(tvShows));

    return(
        <div className="on-the-air-tv-shows-comp">
            <ParticularTvShows tvShows={tvShows} typeOfTvShows='On The Air TV Shows' routePath="/category/on-the-air-tv-shows" />
        </div>
    );
};

export default OnTheAirTvShowsComp;