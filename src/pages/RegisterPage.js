import React, {useState} from 'react';
import HeaderComp from '../components/HeaderComp.js';
import '../scss/pages/RegisterPage.scss';
import { Link } from "react-router-dom";
import useForm from 'react-hook-form';

const RegisterPage = (props) => {

    const {register, handleSubmit, errors} = useForm();
    const [emptyRegisteredUsers, setEmptyRegisteredUsers] = useState(false);

    const onSubmit = data => {
        const password = data.password;
        const confirmPassword = data.confirmPassword;

        if(password === confirmPassword) {
            if(emptyRegisteredUsers) {
                localStorage.setItem('registeredUsers', JSON.stringify(data));
                alert('Your account have been created!')
                setTimeout(props.history.push('/login'), 2000);
            } else {
                localStorage.setItem('registeredUsers', JSON.stringify(data));
                setEmptyRegisteredUsers(true); 
            }
        } else {
            alert('The form must be filled correctly!');
        };
    };

    return(
        <div className="register-page-container">
            <HeaderComp/>

            <main>
                <div className="register">
                    <img alt="Register Logo" src="https://images.unsplash.com/photo-1524245510371-a10ac6be9ec9?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" className="register-img" />

                    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="register-heading">Register</h1>

                        <label htmlFor="name" className="register-label">Name</label>
                        <input type="text" placeholder="Enter your name" name="name" id="name" className="register-input" 
                            ref={register({
                                required: true
                        })} />

                        {(errors.name && errors.name.type === 'required') && <p>This is required</p>}
                        
                        <label htmlFor="username" className="register-label">Username</label>
                        <input type="text" placeholder="Enter your username" name="username" id="username" className="register-input" ref={register({
                            required: true,
                            minLength: 4
                        })} />

                        {(errors.username && errors.username.type === 'required') && <p>This is required</p>}
                        {(errors.username && errors.username.type === 'minLength') && <p>The username don't must be less than 4 characters.</p>}

                        <label htmlFor="email" className="register-label">Email address</label>
                        <input type="email" placeholder="Enter your email" name="email" id="email" className="register-input" ref={register({
                            required: true,
                            pattern: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
                        })} />
                        
                        {(errors.email && errors.email.type === 'required') && <p>This is required</p>}
                        {(errors.email && errors.email.type === 'pattern') && <p>The email address must contain the name, @ and the domain.</p>}

                        <label htmlFor="password" className="register-label">Password</label>
                        <input type="password" placeholder="Enter your password" name="password" id="password" className="register-input" ref={register({
                            required: true,
                            pattern: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
                        })} />

                        {(errors.password && errors.password.type === 'required') && <p>This is required</p>}
                        {(errors.password && errors.password.type === 'pattern') && <p>Your password must contain 1 lowercase and 1 uppercase letter, and be at least 8 characters.</p>}

                        <label htmlFor="confirmPassword" className="register-label">Confirm password</label>
                        <input type="password" placeholder="Confirm your password" name="confirmPassword" id="confirmPassword" className="register-input" ref={register} />

                        <div className="register-checkbox-couple">
                            <input type="checkbox" name="terms" id="terms" ref={register({required: true})} />
                            <label htmlFor="terms" className="register-label">I accept the 
                                <a href="https://www.termsandconditionsgenerator.com/" target="_blank" rel="noopener noreferrer"> Terms of Use </a> &
                                <a rel="noopener noreferrer" href="https://www.termsandconditionsgenerator.com/" target="_blank"> Privacy Policy.</a>
                            </label>
                        </div>

                        {(errors.terms && errors.terms.type === 'required') && <p>This is required</p>}

                        <div className="register-submit-couple">
                            <button type="submit" className="register-submit">Register</button>
                            <span>or</span>
                            <button className="login">
                                <Link to="/login">Login</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
};

export default RegisterPage;