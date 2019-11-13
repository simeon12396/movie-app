import React from 'react';
import HeaderComp from '../components/HeaderComp.js'
import '../scss/pages/LoginPage.scss';

const LoginPage = () => {
    return(        
        <div className="login-page-container">
            <HeaderComp/>

            <main>
                <h1>hello from login page</h1>
            </main>
        </div>
    )
};

export default LoginPage;