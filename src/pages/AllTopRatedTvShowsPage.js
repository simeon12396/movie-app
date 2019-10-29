import React from 'react';
import AllParticularTvShows from '../layouts/AllParticularTvShows.js';

const AllTopRatedTvShowsPage = () => {
    const getTopRatedTvShows = JSON.parse(localStorage.getItem('topRatedTvShows'));

    return(
        <AllParticularTvShows allTvShows={getTopRatedTvShows} />
    )
};

export default AllTopRatedTvShowsPage;