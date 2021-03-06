import React from 'react';
import AllParticularTvShows from '../layouts/AllParticularTvShows.js';

const AllPopularTvShowsPage = () => {
    const getAllPopularTvShows = JSON.parse(localStorage.getItem('popularTvShows'));

    return(
        <div>
            <AllParticularTvShows allTvShows={getAllPopularTvShows} />
        </div>
    );
};

export default AllPopularTvShowsPage;