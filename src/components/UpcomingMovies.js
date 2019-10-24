import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/components/UpcomingMovies.scss';
import StarRatingComponent from 'react-star-rating-component';
import {useFetchMovies as useFetchUpcomingMovies } from '../helpers/requests';

const UpcomingMovies = () => {

    const settings = {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 11600,
        infinite: true,
        speed: 400,
        cssEase: 'linear',
        dots: false
    };

    const imageUrlApi = 'http://image.tmdb.org/t/p/original';
   
    const sliceText = (currentOverview) => {
        const slicedOverview = currentOverview.slice(0, 200);

        const newOverview = `${slicedOverview}...`;

        return newOverview;
    };

    const upcomingMovies = useFetchUpcomingMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');
    
    if(upcomingMovies) {
        const eachMovie = upcomingMovies.map((movie, index) => {
            return(
                <div className="upcoming-comp" key={index}>
                    <div className="slide">
                        <div className="slide-details">
                            <h3 className="slide-title">{movie.title}</h3>
                            
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
        
                            <span className="slide-overview">{sliceText(movie.overview)}</span>
        
                            <button className="btn btn-primary slider-btn">Watch trailer</button>
                        </div>
    
                        <img src={`${imageUrlApi}${movie.backdrop_path}`} className="slide-img" />
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

export default UpcomingMovies;