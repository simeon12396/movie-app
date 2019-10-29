import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchPopularTvShows} from '../helpers/requests.js';
import ParticularTvShows from '../layouts/ParticularTvShows.js';

const PopularTvShowsComp = () => {
    const tvShows = useFetchPopularTvShows('https://api.themoviedb.org/3/tv/popular?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');

    localStorage.setItem('popularTvShows', JSON.stringify(tvShows));
    
    return(
        <div className="popular-tv-shows-comp">
            <ParticularTvShows tvShows={tvShows} typeOfTvShows='Popular TV Shows' routePath='/category/popular-tv-shows' />
        </div>
    );
};

export default PopularTvShowsComp;