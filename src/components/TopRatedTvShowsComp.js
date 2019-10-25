import React from 'react';
import {useFetchDataFromTheMovieAPI as useFetchTopRatedTvShows} from '../helpers/requests.js';
import ParticularTVShows from '../layouts/ParticularTVShows';

const TopRatedTvShowsComp = () => {
    const tvShows = useFetchTopRatedTvShows('https://api.themoviedb.org/3/tv/top_rated?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1')

    return(
        <div className="top-rated-tv-shows-comp">
            <ParticularTVShows tvShows={tvShows} typeOfTvShows='Top Rated TV Shows' />
        </div>
    );
};

export default TopRatedTvShowsComp;