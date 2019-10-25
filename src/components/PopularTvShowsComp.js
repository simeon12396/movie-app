import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchPopularTvShows} from '../helpers/requests.js';
import ParticularTVShows from '../layouts/ParticularTVShows';

const PopularTvShowsComp = () => {
    const tvShows = useFetchPopularTvShows('https://api.themoviedb.org/3/tv/popular?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');

    return(
        <div className="popular-tv-shows-comp">
            <ParticularTVShows tvShows={tvShows} typeOfTvShows='Popular TV Shows' />
        </div>
    );
};

export default PopularTvShowsComp;