import React from 'react';
import HeaderComp from '../components/HeaderComp.js';
import '../scss/pages/FavoritePage.scss';

const FavoritePage = () => {
    
    return(
        <div className="favorite-page">
            <HeaderComp/>

            <main className="favorite">
                <div className="container">
                    <h1 className="favorite-heading">Favorite films and tv shows</h1>

                    <div className="favorite-line"></div>
                </div>
            </main>
        </div>
    )
};

export default FavoritePage;