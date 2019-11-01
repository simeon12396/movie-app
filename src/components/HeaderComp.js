import React from 'react';
import '../scss/components/HeaderComp.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUserPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderComp = () => {
    return (
        <div className="header-comp">
            <header className="header">
                <nav className="header-nav">
                    <li className="header-li">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} className="icons" />
                        </Link>
                    </li>
                    <li className="header-li">
                        <Link to="#">
                            <FontAwesomeIcon icon={faSearch} className="icons" />
                        </Link>
                    </li>
                    <li className="header-li">
                        <Link to="#">
                            <FontAwesomeIcon icon={faUserPlus} className="icons" />
                        </Link>
                    </li>
                    <li className="header-li">
                        <Link to="#">
                            <FontAwesomeIcon icon={faSignInAlt} className="icons" />
                        </Link>
                    </li>
                </nav>
            </header>
        </div>
    )
};

export default HeaderComp;