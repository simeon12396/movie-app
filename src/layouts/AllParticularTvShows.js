import React from 'react';
import HeaderComp from '../components/HeaderComp.js';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import '../scss/components/AllParticularTvShows.scss';
import { Link } from "react-router-dom";
import ScrollUpButton from "react-scroll-up-button";

const AllParticularTvShows = (props) => {

    const imageUrlApi = 'http://image.tmdb.org/t/p/original';

        if(props.allTvShows) {
            const eachTvShow = props.allTvShows.map((show, index) => {
                return(
                    <div className="each-show" key={index}>
                        <img src={`${imageUrlApi}${show.poster_path}`} alt="" />
    
                        <span className="each-show-title">{show.original_name}</span>
    
                        <div className="each-show-star">
                            <StarRatingComponent
                                name="rating"
                                starCount={6}
                                value={show.vote_average}
                                color='blue'
                            />
    
                            <span className="each-show-average">{show.vote_average}</span>
                        </div>

                        <Link to={`/tv-show/${show.id}`} className="each-show-overlay-effect">
                            <FontAwesomeIcon icon={faPlusCircle} className="icons" />
                        </Link>

                        <ScrollUpButton/>
                    </div>
                );
            });

            return(
                <div className="all-particular-tv-shows">
                    <HeaderComp/>
        
                    <main>
                        {eachTvShow}
                    </main>
                </div>
            );
        } else {
            return null;
        };
};

export default AllParticularTvShows