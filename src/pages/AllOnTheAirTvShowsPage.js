import React from 'react';
import AllParticularTvShows from '../layouts/AllParticularTvShows.js';

const AllOnTheAirTvShowsPage = () => {

    const getOnTheAirTvShows = JSON.parse(localStorage.getItem('onTheAirTvShows'));

    return(
        <AllParticularTvShows allTvShows={getOnTheAirTvShows} />
    )
};

export default AllOnTheAirTvShowsPage;