import React from 'react';
import AllParticularTvShows from '../layouts/AllParticularTvShows.js';
import {useScrollEffect, handleScrollToTop} from '../helpers/methodsAndHooks.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AllPopularTvShowsPage = () => {
    const getAllPopularTvShows = JSON.parse(localStorage.getItem('popularTvShows'));

    useScrollEffect();
    handleScrollToTop();

    return(
        <div>
            <AllParticularTvShows allTvShows={getAllPopularTvShows} />

            <div className="scroll-to-top" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
};

export default AllPopularTvShowsPage;