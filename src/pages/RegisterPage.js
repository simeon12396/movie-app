import React from 'react';
import HeaderComp from '../components/HeaderComp.js';
import '../scss/pages/RegisterPage.scss';
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return(
        <div className="register-page-container">
            <HeaderComp/>

            <main>
                <div className="register">
                    <img alt="Register Logo" src="https://images.unsplash.com/photo-1524245510371-a10ac6be9ec9?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" className="register-img" />

                    <form className="register-form">
                        <label htmlFor="name" className="register-label">Name</label>
                        <input type="text" placeholder="Enter your name" name="name" id="name" className="register-input" />

                        <label htmlFor="email" className="register-label">Email address</label>
                        <input type="email" placeholder="Enter your email" name="email" id="email" className="register-input" />

                        <label htmlFor="password" className="register-label">Password</label>
                        <input type="password" placeholder="Enter your password" name="password" id="password" className="register-input" />

                        <label htmlFor="confirmPassword" className="register-label">Password</label>
                        <input type="password" placeholder="Confirm your password" name="confirmPassword" id="confirmPassword" className="register-input" />

                        <div className="register-checkbox-couple">
                            <input type="checkbox" name="terms" id="terms"/>
                            <label htmlFor="terms" className="register-label">I accept the 
                                <a href="https://www.termsandconditionsgenerator.com/" target="_blank" rel="noopener noreferrer"> Terms of Use </a> &
                                <a rel="noopener noreferrer" href="https://www.termsandconditionsgenerator.com/" target="_blank"> Privacy Policy.</a>
                            </label>
                        </div>

                        <div className="register-submit-couple">
                            <button type="submit" className="register-submit">Register</button>
                            <span>or</span>
                            <button className="register-log-in">
                                <Link to="/login">Log in</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
};

export default RegisterPage;