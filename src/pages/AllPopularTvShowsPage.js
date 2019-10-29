import React from 'react';
import AllParticularTvShows from '../layouts/AllParticularTvShows.js';

const AllPopularTvShowsPage = () => {
    const getAllPopularTvShows = JSON.parse(localStorage.getItem('popularTvShows'));

    return(
        <AllParticularTvShows allTvShows={getAllPopularTvShows} />
    );
};

export default AllPopularTvShowsPage;