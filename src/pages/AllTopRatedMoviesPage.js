import React from 'react';
import AllParticularMovies from '../layouts/AllParticularMovies.js';
import {useScrollEffect, handleScrollToTop} from '../helpers/methodsAndHooks.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AllTopRatedMoviesPage = () => {
    const getAllTopRatedMovies = JSON.parse(localStorage.getItem('topRatedMovies'));

    useScrollEffect();
    handleScrollToTop();

    return(
        <div className="all-top-rated-movies-page">
            <AllParticularMovies allMovies={getAllTopRatedMovies} />

            <div className="scroll-to-top" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
};

export default AllTopRatedMoviesPage;