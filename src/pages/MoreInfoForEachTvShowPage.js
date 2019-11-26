import React from 'react';
import HeaderComp from '../components/HeaderComp.js';
import {useFetchPrimaryDataAboutMovie, useFetchCastAndCrewAboutMovie ,useFetchKeywordsAboutMovie} from '../helpers/requests.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay, faLink } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../scss/pages/MoreInfoForEachTvShowPage.scss';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MoreInfoFromEachTvShowPage = (props) => {
    const sliderSettings = {
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 6000,
        infinite: false,
        speed: 400,
        cssEase: 'linear',
        dots: false
    };

    const tvShowId = props.match.params.id;

    const APIKey = 'ce30a4e46c4adcde72216d273f3f7ba0';

    const primaryDataTvShow = useFetchPrimaryDataAboutMovie(`https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${APIKey}&language=en-US`);

    const staffTvShow = useFetchCastAndCrewAboutMovie(`https://api.themoviedb.org/3/tv/${tvShowId}/credits?api_key=${APIKey}&language=en-US`);

    const keywordsTvShow = useFetchKeywordsAboutMovie(`https://api.themoviedb.org/3/tv/${tvShowId}/keywords?api_key=${APIKey}`)

    const imageUrlApi = 'http://image.tmdb.org/t/p/original';

    let favoriteArray = [];

    const handleAddToFavorite = () => {
        let movieData = {...primaryDataTvShow, imgURL: imageUrlApi };
        const getLatestFavoriteItems = JSON.parse(localStorage.getItem('favorite'));
        favoriteArray = [...getLatestFavoriteItems];
        favoriteArray.push(movieData);
        localStorage.setItem('favorite', JSON.stringify(favoriteArray))
    };

    if(primaryDataTvShow && staffTvShow && keywordsTvShow) {

        const eachKeyword = keywordsTvShow.results.map((keyword, index) => {
            return(
                <span key={index}>{keyword.name}</span>
            );
        });

        const eachPersonFromCast = staffTvShow.cast.map((castPerson, index) => {
            if(castPerson.profile_path !== null) {
                return(
                    <div className="tv-show-staff-container" key={index}>
                        <Link to={`/person/${castPerson.id}`}>
                            <img src={`${imageUrlApi}${castPerson.profile_path}`} className="tv-show-img-cast" alt="" />
                        </Link>
                        <p className="tv-show-name">{castPerson.name}</p>
                        <p className="tv-show-role">{castPerson.character}</p>
                    </div>  
                );
            } else {
                return null;
            };
        });

        const eachPersonFromCrew = staffTvShow.crew.map((crewPerson, index) => {
            if(crewPerson.profile_path !== null) {
                return(
                    <div className="tv-show-staff-container" key={index}>
                        <Link to={`/person/${crewPerson.id}`}>
                            <img src={`${imageUrlApi}${crewPerson.profile_path}`} className="tv-show-img-cast" alt="" />
                        </Link>
                        <p className="tv-show-name">{crewPerson.name}</p>
                        <p className="tv-show-job">{crewPerson.job}</p>
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
                    <div className="tv-show container">
                        <img src={`${imageUrlApi}${primaryDataTvShow.poster_path}`} className="tv-show-img" alt="" />
                        
                        <div className="tv-show-description">
                            <h3>{primaryDataTvShow.title}</h3>
                            
                            <div className="tv-show-buttons">
                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip id='tooltip-user-score'>User score</Tooltip>}
                                >
                                    <div className="tv-show-score-cnt">
                                        <CircularProgressbar value={`${primaryDataTvShow.vote_average * 10}`} text={`${primaryDataTvShow.vote_average * 10}%`} className="tv-showscore" />
                                    </div>
                                </OverlayTrigger>
                                
                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip id='tooltip-add-to-favorite'>Add to favorite </Tooltip>}
                                >
                                    <button className="tv-show-add-to-favorite" onClick={handleAddToFavorite}>
                                        <FontAwesomeIcon icon={faHeart} className="icons" />
                                    </button>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip id='tooltip-watch-trailer'>Watch trailer</Tooltip>}
                                >
                                    <button className="tv-show-play">
                                        <FontAwesomeIcon icon={faPlay} className="icons" />
                                    </button>
                                </OverlayTrigger>

                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip>Go to official site</Tooltip>}
                                >
                                    <a href={primaryDataTvShow.homepage} target="_blank" className="tv-show-homepage" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLink} className="icons" />
                                    </a>
                                </OverlayTrigger>
                            </div>

                            <h4>Overview</h4>

                            <p>{primaryDataTvShow.overview}</p>

                            <div className="tv-show-details">
                                <div className="item">
                                    <h5>Status</h5>

                                    <p>{primaryDataTvShow.status}</p>
                                </div>

                                <div className="item">
                                    <h5>Popularity</h5>

                                    <p>{`${primaryDataTvShow.popularity}`}</p>
                                </div>

                                <div className="item">
                                    <h5>Original language</h5>

                                    <p className="tv-show-langauge">{`${primaryDataTvShow.original_language}`}</p>
                                </div>

                                <div className="item">
                                    <h5>Seasons</h5>

                                    <p className="tv-show-seasons">{`${primaryDataTvShow.number_of_seasons}`}</p>
                                </div>

                                <div className="item">
                                    <h5>Episodes</h5>

                                    <p className="tv-show-episodes">{`${primaryDataTvShow.number_of_episodes}`}</p>
                                </div>
                            </div>

                            <div className="tv-show-keywords">
                                <h5>Keywords</h5>

                                <div className="tv-show-keywords-cnt">
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
                            <Slider {...sliderSettings} className="tv-show-cast-slider">
                                {eachPersonFromCast}
                            </Slider>
                        </TabPanel>

                        <TabPanel>
                            <Slider {...sliderSettings} className="tv-show-cast-slider">
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

export default MoreInfoFromEachTvShowPage;