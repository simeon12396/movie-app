import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useFetchMovies as useFetchNowPlayingMovies} from '../helpers/requests.js';
import { Link } from "react-router-dom";
import '../scss/components/NowPlayingMovies.scss';
import StarRatingComponent from 'react-star-rating-component';

const NowPlayingMovies = () => {

    const settings = {
        centerMode: true,
        arrows: false,
        slidesToShow: 6,
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

    const nowPlayingMovies = useFetchNowPlayingMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=ce30a4e46c4adcde72216d273f3f7ba0&language=en-US&page=1');
    console.log(nowPlayingMovies)

    if(nowPlayingMovies) {
        const eachMovie = nowPlayingMovies.map((movie, index) => {
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
                </div>
            );
        });

        return(
            <div className="now-playing-movies-comp now-playing-movies">
                <span className="now-playing-movies-heading">Now Playing Movies</span>

                <Link to="#" className="now-playing-movies-explore">Explore all</Link>

                <Slider {...settings} className="now-playing-movies-slider">
                    {eachMovie}
                </Slider>
            </div>
        );
    } else {
        return null;
    }
};

export default NowPlayingMovies;