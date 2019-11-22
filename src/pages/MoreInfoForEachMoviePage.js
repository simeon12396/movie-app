import React from 'react';
import HeaderComp from '../components/HeaderComp.js';
import {useFetchPrimaryDataAboutMovie, useFetchCastAndCrewAboutMovie ,useFetchKeywordsAboutMovie} from '../helpers/requests.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay, faLink } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../scss/pages/MoreInfoForEachMoviePage.scss';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MoreInfoForEachMoviePage = (props) => {

    const sliderSettingsCast = {
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 400,
        cssEase: 'linear',
        dots: false
    };

    const sliderSettingsCrew = {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 6000,
        infinite: false,
        speed: 400,
        cssEase: 'linear',
        dots: false
    };

    const movieId = props.match.params.id;

    const APIKey = 'ce30a4e46c4adcde72216d273f3f7ba0';

    const primaryDataMovie = useFetchPrimaryDataAboutMovie(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}&language=en-US`);
    
    const staffMovie = useFetchCastAndCrewAboutMovie(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKey}`);
    
    const keywordsMovie = useFetchKeywordsAboutMovie(`https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${APIKey}`)
    
    const imageUrlApi = 'http://image.tmdb.org/t/p/original';
    
    let favoriteArray = [];

    const handleAddToFavorite = () => {
        let movieData = {...primaryDataMovie, imgURL: imageUrlApi };
        const getLatestFavoriteItems = JSON.parse(localStorage.getItem('favorite'));
        favoriteArray = [...getLatestFavoriteItems];
        favoriteArray.push(movieData);
        localStorage.setItem('favorite', JSON.stringify(favoriteArray))
    };

    if(primaryDataMovie && staffMovie && keywordsMovie) {

        const eachKeyword = keywordsMovie.keywords.map((keyword, index) => {
            return(
                <span key={index}>{keyword.name}</span>
            );
        });

        const eachPersonFromCast = staffMovie.cast.map((castPerson, index) => {
            if(castPerson.profile_path !== null) {
                return(
                    <div className="movie-staff-container" key={index}>
                        <Link to={`/person/${castPerson.id}`}>
                            <img src={`${imageUrlApi}${castPerson.profile_path}`} className="movie-img-cast" alt="" />
                        </Link>
                        <p className="movie-name">{castPerson.name}</p>
                        <p className="movie-role">{castPerson.character}</p>
                    </div>  
                );
            } else {
                return null;
            };
        });

        const eachPersonFromCrew = staffMovie.crew.map((crewPerson, index) => {
            if(crewPerson.profile_path !== null) {
                return(
                    <div className="movie-staff-container" key={index}>
                        <Link to={`/person/${crewPerson.id}`}>
                            <img src={`${imageUrlApi}${crewPerson.profile_path}`} className="movie-img-cast" alt="" />
                        </Link>
                        <p className="movie-name">{crewPerson.name}</p>
                        <p className="movie-job">{crewPerson.job}</p>
                    </div>  
                );
            } else {
                return null;
            };
        });

        return(
            <div className="more-info-page">
                <HeaderComp/>
                
                <main>
                    <div className="movie container">
                        <img src={`${imageUrlApi}${primaryDataMovie.poster_path}`} className="movie-img" alt="" />
                        
                        <div className="movie-description">
                            <h3>{primaryDataMovie.title}</h3>
                            
                            <div className="movie-buttons">
                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip id='tooltip-user-score'>User score</Tooltip>}
                                >
                                    <div className="movie-score-cnt">
                                        <CircularProgressbar value={`${primaryDataMovie.vote_average * 10}`} text={`${primaryDataMovie.vote_average * 10}%`} className="movie-score" />
                                    </div>
                                </OverlayTrigger>
                                
                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip id='tooltip-add-to-favorite'>Add to favorite </Tooltip>}
                                >
                                    <button className="movie-add-to-favorite" onClick={handleAddToFavorite}>
                                        <FontAwesomeIcon icon={faHeart} className="icons" />
                                    </button>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip id='tooltip-watch-trailer'>Watch trailer</Tooltip>}
                                >
                                    <button className="movie-play">
                                        <FontAwesomeIcon icon={faPlay} className="icons" />
                                    </button>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip>Go to official site</Tooltip>}
                                >
                                    <a href={primaryDataMovie.homepage} target="_blank" className="movie-homepage" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLink} className="icons" />
                                    </a>
                                </OverlayTrigger>
                            </div>

                            <h4>Overview</h4>

                            <p>{primaryDataMovie.overview}</p>

                            <div className="movie-details">
                                <div className="item">
                                    <h5>Status</h5>

                                    <p>{primaryDataMovie.status}</p>
                                </div>

                                <div className="item">
                                    <h5>Budget</h5>

                                    <p>{`$${primaryDataMovie.budget}`}</p>
                                </div>

                                <div className="item">
                                    <h5>Revenue</h5>

                                    <p>{`$${primaryDataMovie.revenue}`}</p>
                                </div>

                                <div className="item">
                                    <h5>Runtime</h5>

                                    <p>{`${primaryDataMovie.runtime} min`}</p>
                                </div>

                                <div className="item">
                                    <h5>Popularity</h5>

                                    <p>{`${primaryDataMovie.popularity}`}</p>
                                </div>

                                <div className="item">
                                    <h5>Original language</h5>

                                    <p className="movie-langauge">{`${primaryDataMovie.original_language}`}</p>
                                </div>
                            </div>

                            <div className="movie-keywords">
                                <h5>Keywords</h5>

                                <div className="movie-keywords-cnt">
                                    {eachKeyword}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Tabs className="container">
                        <TabList>
                            <Tab>Cast</Tab>
                            <Tab>Crew</Tab>
                        </TabList>

                        <TabPanel>
                            <Slider {...sliderSettingsCast} className="movie-cast-slider">
                                {eachPersonFromCast}
                            </Slider>
                        </TabPanel>

                        <TabPanel>
                            <Slider {...sliderSettingsCrew} className="movie-cast-slider">
                                {eachPersonFromCrew}
                            </Slider>
                        </TabPanel>
                    </Tabs>
                </main>
            </div>
        );
    } else {
        return null;
    };
};

export default MoreInfoForEachMoviePage;