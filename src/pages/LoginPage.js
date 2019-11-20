import React, {useState} from 'react';
import HeaderComp from '../components/HeaderComp.js'
import '../scss/pages/LoginPage.scss';
import loginImage from '../images/user-image.png';
import { Link } from "react-router-dom";
import useForm from 'react-hook-form';

const LoginPage = () => {

    const {register, handleSubmit, errors} = useForm();
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
    
    const onSubmit = (data) => {
        if((registeredUsers.username === data.username) && (registeredUsers.password === data.password)) {
            localStorage.setItem('authenticatedUsers', JSON.stringify(data));
            localStorage.setItem('isAuthenticated', true);
            alert('Congratulations! You are logged in!')
         } else {
            alert("Account doesn't exist!")
        }
    };

    return(        
        <div className="login-page-container">
            <HeaderComp/>

            <main>
                <div className="login">
                    <img src={loginImage} className="login-image" />
                    
                    <h1 className="login-heading">Login</h1>

                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="username" className="login-label" >Username</label>
                        <input name="username" id="username" type="text" className="login-input" placeholder="Enter your username" ref={register({required: true})} />

                        {(errors.username && errors.username.type === 'required') && <p>This is required</p>}

                        <label htmlFor="password" className="login-label" >Password</label>
                        <input name="password" id="password" type="password" className="login-input" placeholder="Enter your password" ref={register({required: true})} />
                        
                        {(errors.password && errors.password.type === 'required') && <p>This is required</p>}

                        <button type="submit" className="login-btn">Login</button>

                        <div className="create-acc">
                            <span>Don't have an account?</span>
                            <Link to="/register">Create account</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
};

export default LoginPage;