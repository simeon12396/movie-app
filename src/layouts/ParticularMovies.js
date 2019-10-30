import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import '../scss/components/ParticularMovies.scss';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ParticularMovies = (props) => {

    const settings = {
            arrows: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: false,
            autoplaySpeed: 6000,
            infinite: true,
            speed: 400,
            cssEase: 'linear',
            dots: false
        };

        const imageUrlApi = 'http://image.tmdb.org/t/p/original';
    
        if(props.movies) {
            const eachMovie = props.movies.map((movie, index) => {
                return(
                    <div className="each-movie" key={index}>
                        <img src={`${imageUrlApi}${movie.poster_path}`} />
    
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
                    </div>
                );
            });
    
            return(
                <div className="particular-movies-comp particular-movies">
                    <span className="particular-movies-heading">{props.typeOfMovies}</span>
    
                      <Link to={props.routePath} className="particular-movies-explore">Explore all</Link>
    
                    <Slider {...settings} className="particular-movies-slider">
                        {eachMovie}
                    </Slider>
                </div>
            );
        } else {
            return null;
        };
};

export default ParticularMovies;