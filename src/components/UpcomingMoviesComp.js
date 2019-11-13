import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/components/UpcomingMovies.scss';
import StarRatingComponent from 'react-star-rating-component';
import {useFetchDataFromTheMovieAPI as useFetchUpcomingMovies } from '../helpers/requests.js';
import {sliceText} from '../helpers/methodsAndHooks.js';
import { Link } from "react-router-dom";

const UpcomingMoviesComp = () => {

    const settings = {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 9000,
        infinite: true,
        speed: 400,
        cssEase: 'linear',
        dots: false
    };

    const imageUrlApi = 'http://image.tmdb.org/t/p/original';

    const upcomingMovies = useFetchUpcomingMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');
    
    if(upcomingMovies) {
        const eachMovie = upcomingMovies.map((movie, index) => {
            return(
                <div className="upcoming-comp" key={index}>
                    <div className="slide">
                        <div className="slide-details">
                            <Link to={`/movie/${movie.id}`}>
                                <h3 className="slide-title">{movie.title}</h3>
                            </Link>
                            
                            <div className="slide-stars">
                                <StarRatingComponent
                                    name="rating"
                                    starCount={6}
                                    value={movie.vote_average}
                                    color='blue'
                                />
        
                                <span className="slide-reviews">{movie.vote_count} Reviews</span>
        
                                <span className="slide-language">{movie.original_language}</span>
        
                                <span className="slide-release">{movie.release_date}</span>
                            </div>
        
                            <Link to={`/movie/${movie.id}`}>
                                <span className="slide-overview">{sliceText(movie.overview)}</span>
                            </Link>
        
                            <button className="btn btn-primary slider-btn">Watch trailer</button>
                        </div>
    
                        <img src={`${imageUrlApi}${movie.backdrop_path}`} className="slide-img" alt="" />
                    </div>
                </div>
            );
        });

        return(
            <div className="slider-comp upcoming-movies-comp">
                <Slider {...settings}>
                    {eachMovie}
                </Slider>
            </div>
        );

    } else {
        return null
    };
};

export default UpcomingMoviesComp;