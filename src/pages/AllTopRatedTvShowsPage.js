import React from 'react';
import AllParticularTvShows from '../layouts/AllParticularTvShows.js';

const AllTopRatedTvShowsPage = () => {
    const getTopRatedTvShows = JSON.parse(localStorage.getItem('topRatedTvShows'));

    return(
        <div>
            <AllParticularTvShows allTvShows={getTopRatedTvShows} />
        </div>
    )
};

export default AllTopRatedTvShowsPage;