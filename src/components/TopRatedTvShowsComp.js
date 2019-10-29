import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchTopRatedTvShows} from '../helpers/requests.js';
import ParticularTvShows from '../layouts/ParticularTvShows.js';

const TopRatedTvShowsComp = () => {
    const tvShows = useFetchTopRatedTvShows('https://api.themoviedb.org/3/tv/top_rated?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1')

    localStorage.setItem('topRatedTvShows', JSON.stringify(tvShows));
    
    return(
        <div className="top-rated-tv-shows-comp">
            <ParticularTvShows tvShows={tvShows} typeOfTvShows='Top Rated TV Shows' routePath='/category/top-rated-tv-shows' />
        </div>
    );
};

export default TopRatedTvShowsComp;