import React, {useState} from 'react';
import HeaderComp from '../components/HeaderComp.js';
import '../scss/pages/FavoritePage.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FavoritePage = () => {
    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorite')));

    const handleRemoveItem = (currentId) => {
        favorite.forEach((item, key) => {
            if(item.id === currentId) {
                favorite.splice(key, 1);
                localStorage.setItem('favorite', JSON.stringify(favorite));
                setFavorite(JSON.parse(localStorage.getItem('favorite')));
            };
        });
    };

    const displayFavorite = favorite.map((item, index) => {
        return(
            <div key={index} className="favorite-item">
                <Link to={`/movie/${item.id}`}>
                    <img src={`${item.imgURL}${item.poster_path}`} className="favorite-img" />
                </Link>
                
                <div className="favorite-right-side">
                    <div className="favorite-inline-items">
                        <OverlayTrigger
                            placement='bottom'
                            overlay={<Tooltip id='tooltip-user-score'>User score</Tooltip>}
                        >
                            <div>
                                <CircularProgressbar value={`${item.vote_average * 10}`} text={`${item.vote_average * 10}%`} className="favorite-score" />
                            </div>
                        </OverlayTrigger>      

                        <span className="favorite-title">{item.title}</span>

                        <span className="favorite-release-date">{item.release_date}</span>
                    </div>

                    <span>{item.overview}</span>

                    <div className="favorite-buttons">
                        <OverlayTrigger
                            placement='bottom'
                            overlay={<Tooltip id='tooltip-remove-item'>Remove from favorite </Tooltip>}
                        >
                            <button className="favorite-remove-item" onClick={handleRemoveItem.bind(this, item.id)}>
                                <FontAwesomeIcon icon={faTimes} className="icons" />
                            </button>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement='bottom'
                            overlay={<Tooltip>Go to official site</Tooltip>}
                        >
                            <a href={item.homepage} target="_blank" className="favorite-homepage" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLink} className="icons" />
                            </a>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <div className="favorite-page">
            <HeaderComp/>

            <main className="favorite">
                <div className="container">
                    <h1 className="favorite-heading">Favorite films and tv shows</h1>
                    {displayFavorite}
                    <div className="favorite-line"></div>
                </div>
            </main>
        </div>
    )
};

export default FavoritePage;