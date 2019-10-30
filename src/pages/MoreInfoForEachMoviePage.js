import React from 'react';
import HeaderComp from '../components/HeaderComp.js';
import {useFetchPrimaryDataAboutMovie, useFetchCastAndCrewAboutMovie, useFetchKeywordsAboutMovie} from '../helpers/requests.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay,faLink } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../scss/pages/MoreInfoForEachMoviePage.scss';

const MoreInfoForEachMoviePage = (props) => {
    const movieId = props.match.params.id;

    const APIKey = 'ce30a4e46c4adcde72216d273f3f7ba0';

    const primaryDataMovie = useFetchPrimaryDataAboutMovie(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}&language=en-US`);

    const staffMovie = useFetchCastAndCrewAboutMovie(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKey}`);

    const keywordsMovie = useFetchKeywordsAboutMovie(`https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${APIKey}`)

    const imageUrlApi = 'http://image.tmdb.org/t/p/original';

    console.log(primaryDataMovie, staffMovie, keywordsMovie);

    if(primaryDataMovie && staffMovie && keywordsMovie) {

        const eachKeyword = keywordsMovie.keywords.map((keyword, index) => {
            return(
                <span key={index}>{keyword.name}</span>
            );
        });

        return(
            <div className="more-info-page">
                <HeaderComp/>
                
                <main>
                    <div className="movie container">
                        <img src={`${imageUrlApi}${primaryDataMovie.poster_path}`} className="movie-img" />
                        
                        <div className="movie-description">
                            <h3>{primaryDataMovie.title}</h3>
                            
                            <div className="movie-buttons">
                                <CircularProgressbar value={`${primaryDataMovie.vote_average * 10}`} text={`${primaryDataMovie.vote_average * 10}%`} className="movie-score" />
                                
                                <button className="movie-add-to-favorite">
                                    <FontAwesomeIcon icon={faHeart} className="icons" />
                                </button>

                                <button className="movie-play">
                                    <FontAwesomeIcon icon={faPlay} className="icons" />
                                </button>

                                <button className="movie-homepage">
                                    <FontAwesomeIcon icon={faLink} className="icons" />
                                </button>
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
                            <h2>Any content 1</h2>
                        </TabPanel>

                        <TabPanel>
                            <h2>Any content 2</h2>
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