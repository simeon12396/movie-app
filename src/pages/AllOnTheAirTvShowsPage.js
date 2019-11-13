import React from 'react';
import AllParticularTvShows from '../layouts/AllParticularTvShows.js';

const AllOnTheAirTvShowsPage = () => {

    const getOnTheAirTvShows = JSON.parse(localStorage.getItem('onTheAirTvShows'));

    return(
        <div>
            <AllParticularTvShows allTvShows={getOnTheAirTvShows} />
        </div>
    )
};

export default AllOnTheAirTvShowsPage;