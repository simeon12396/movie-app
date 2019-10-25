import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchOnTheAirShows} from '../helpers/requests.js';
import ParticularTVShows from '../layouts/ParticularTVShows';

const OnTheAirTvShowsComp = () => {

    const tvShows = useFetchOnTheAirShows('https://api.themoviedb.org/3/tv/on_the_air?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');

    return(
        <div className="on-the-air-tv-shows-comp">
            <ParticularTVShows tvShows={tvShows} typeOfTvShows='On The Air TV Shows' />
        </div>
    );
};

export default OnTheAirTvShowsComp;