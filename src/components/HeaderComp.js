import React from 'react';
import '../scss/components/HeaderComp.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserPlus, faSignInAlt, faSignOutAlt, faHeart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderComp = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    const getFirstLetterFromUsername = () => {
        const authenticatedUsers = JSON.parse(localStorage.getItem('authenticatedUsers'));
        const username = authenticatedUsers.username;
        const firstLetter = username.charAt(0).toUpperCase();
        
        return firstLetter;
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('authenticatedUsers');
        localStorage.removeItem('favoriteList');
    };

    const handleFavoriteListItem = () => {
        const favoriteListItem = document.querySelector('.header-li--favorite');
        favoriteListItem.classList.toggle('header-li--favorite-active')
        console.log('work')
    };

    const handleFavoriteListItemMobile = () => {
        const favoriteListItem = document.querySelector('.header-nav-mobile .header-li--favorite');
        favoriteListItem.classList.toggle('header-li--favorite-active')
        console.log('work')
    };

    const handleHamburgerMenu = () => {
        const hamburger = document.querySelector('.header-hamburger');
        const navMobile = document.querySelector('.header-nav-mobile');

        hamburger.classList.toggle('header-hamburger--change');
        navMobile.classList.toggle('header-nav-mobile--change');
    };

    return (
        <div className="header-comp">
            <header className="header">
                <div className="header-hamburger" onClick={handleHamburgerMenu}>
                    <FontAwesomeIcon icon={faBars} className="icons" />

                    <FontAwesomeIcon icon={faTimes} className="icons" />
                </div>

                <nav className="header-nav">
                    <li className="header-li">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} className="icons" />
                        </Link>
                        <span className="header-tooltip">Home</span>
                    </li>

                    {
                        (isAuthenticated) ? 
                        (
                            <div>
                                <li className="header-li header-li--profile" onClick={handleFavoriteListItem}>
                                    <span>{getFirstLetterFromUsername()}</span>
                                    <span className="header-tooltip">Profile</span>
                                </li>

                                <li className="header-li header-li--favorite">
                                    <Link to="/user/favorite">
                                        <FontAwesomeIcon icon={faHeart} className="icons" />
                                        <span className="header-tooltip">Favorite</span>
                                    </Link>
                                </li>

                                <li className="header-li">
                                    <Link to="/" onClick={handleLogout}>
                                        <FontAwesomeIcon icon={faSignOutAlt} className="icons" />
                                        <span className="header-tooltip">Logout</span>
                                    </Link>
                                </li>
                            </div>
                        ) : 
                        (
                            <div>
                                <li className="header-li">
                                    <Link to="/register">
                                        <FontAwesomeIcon icon={faUserPlus} className="icons" />
                                        <span className="header-tooltip">Register</span>
                                    </Link>
                                </li>

                                <li className="header-li">
                                    <Link to="/login">
                                        <FontAwesomeIcon icon={faSignInAlt} className="icons" />
                                        <span className="header-tooltip">Login</span>
                                    </Link>
                                </li>
                            </div>
                        )
                    }
                </nav>
                
                <nav className="header-nav-mobile">
                    <li className="header-li">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} className="icons" />
                        </Link>
                    </li>

                    {
                        (isAuthenticated) ? 
                        (
                            <div>
                                <li className="header-li header-li--profile" onClick={handleFavoriteListItemMobile}>
                                    <span>{getFirstLetterFromUsername()}</span>
                                </li>

                                <li className="header-li header-li--favorite">
                                    <Link to="/user/favorite">
                                        <FontAwesomeIcon icon={faHeart} className="icons" />
                                    </Link>
                                </li>

                                <li className="header-li">
                                    <Link to="/" onClick={handleLogout}>
                                        <FontAwesomeIcon icon={faSignOutAlt} className="icons" />
                                    </Link>
                                </li>
                            </div>
                        ) : 
                        (
                            <div>
                                <li className="header-li">
                                    <Link to="/register">
                                        <FontAwesomeIcon icon={faUserPlus} className="icons" />
                                    </Link>
                                </li>

                                <li className="header-li">
                                    <Link to="/login">
                                        <FontAwesomeIcon icon={faSignInAlt} className="icons" />
                                    </Link>
                                </li>
                            </div>
                        )
                    }
                </nav>
            </header>
        </div>
    )
};

export default HeaderComp;