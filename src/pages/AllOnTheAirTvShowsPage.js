import React from 'react';
import AllParticularTvShows from '../layouts/AllParticularTvShows.js';
import {useScrollEffect, handleScrollToTop} from '../helpers/methodsAndHooks.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AllOnTheAirTvShowsPage = () => {

    const getOnTheAirTvShows = JSON.parse(localStorage.getItem('onTheAirTvShows'));

    useScrollEffect();
    handleScrollToTop();

    return(
        <div>
            <AllParticularTvShows allTvShows={getOnTheAirTvShows} />

            <div className="scroll-to-top" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    )
};

export default AllOnTheAirTvShowsPage;