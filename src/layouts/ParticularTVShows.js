import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import '../scss/components/ParticularTVShows.scss';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ParticularTvShows = (props) => {
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
    
    if(props.tvShows) {
        const eachTvShow = props.tvShows.map((show, index) => {
            return(
                <div className="each-tv-show" key={index}>
                    <img src={`${imageUrlApi}${show.poster_path}`} alt="" />

                    <span className="each-tv-show-title">{show.original_name}</span>

                    <div className="each-tv-show-star">
                        <StarRatingComponent
                            name="rating"
                            starCount={6}
                            value={show.vote_average}
                            color='blue'
                        />

                        <span className="each-tv-show-average">{show.vote_average}</span>
                    </div>

                    <Link to={`/tv-show/${show.id}`} className="each-tv-show-overlay-effect">
                        <FontAwesomeIcon icon={faPlusCircle} className="icons" />
                    </Link>
                </div>
            );
        });

        return(
            <div className="particular-tv-shows-comp particular-tv-shows">
                <span className="particular-tv-shows-heading">{props.typeOfTvShows}</span>

                  <Link to={props.routePath} className="particular-tv-shows-explore">Explore all</Link>

                <Slider {...settings} className="particular-tv-shows-slider">
                    {eachTvShow}
                </Slider>
            </div>
        );
    } else {
        return null;
    };
};

export default ParticularTvShows;