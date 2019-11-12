import React from 'react';
import AllParticularMovies from '../layouts/AllParticularMovies.js';
import {useScrollEffect, handleScrollToTop} from '../helpers/methodsAndHooks.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AllPopularMoviesPage = () => {

    const getAllPopularMovies = JSON.parse(localStorage.getItem('popularMovies'));

    useScrollEffect();
    handleScrollToTop();

    return(
        <div className="all-top-rated-movies-page">
            <AllParticularMovies allMovies={getAllPopularMovies} />

            <div className="scroll-to-top" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
};

export default AllPopularMoviesPage;