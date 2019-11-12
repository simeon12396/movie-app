import React from 'react';
import AllParticularMovies from '../layouts/AllParticularMovies.js';
import {useScrollEffect, handleScrollToTop} from '../helpers/methodsAndHooks.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AllNowPlayingMoviesPage = () => {
    const getAllNowPlayingMovies = JSON.parse(localStorage.getItem('nowPlayingMovies'));

    useScrollEffect();
    handleScrollToTop();

    return(
        <div className="all-now-playing-movies-page">
            <AllParticularMovies allMovies={getAllNowPlayingMovies} />

            <div className="scroll-to-top" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
};

export default AllNowPlayingMoviesPage;