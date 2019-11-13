import React from 'react';
import HeaderComp from '../components/HeaderComp.js';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import '../scss/components/AllParticularMovies.scss';
import { Link } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

const AllParticularMovies = (props) => {

    const imageUrlApi = 'http://image.tmdb.org/t/p/original';
   
        if(props.allMovies) {
            const eachMovie = props.allMovies.map((movie, index) => {
                return(
                    <div className="each-movie" key={index}>
                        <img src={`${imageUrlApi}${movie.poster_path}`} alt=""/>
    
                        <span className="each-movie-title">{movie.title}</span>
    
                        <div className="each-movie-star">
                            <StarRatingComponent
                                name="rating"
                                starCount={6}
                                value={movie.vote_average}
                                color='blue'
                            />
    
                            <span className="each-movie-average">{movie.vote_average}</span>
                        </div>

                        <Link to={`/movie/${movie.id}`} className="each-movie-overlay-effect">
                            <FontAwesomeIcon icon={faPlusCircle} className="icons" />
                        </Link>

                        <ScrollUpButton/>
                    </div>
                );
            });

            return(
                <div className="all-particular-movies">
                    <HeaderComp/>
        
                    <main>
                        {eachMovie}
                    </main>
                </div>
            );
        } else {
            return null;
        };
};

export default AllParticularMovies;