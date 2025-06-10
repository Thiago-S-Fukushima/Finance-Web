import { useState } from 'react';
import './css/Login.css';

const Login = () => {
    return (
        <>
            <h1 className="title-Login">Login</h1>
            <form>
                <div className="userLogin-Form-Control">
                    <input id="email" type="email" name="Email" placeholder="E-mail" requerid="true"/>
                    <input id="password" type="password" name="password" placeholder="Password" requerid="true"/>
                </div>
                <button className="userLogin-submit-button" type="submit">Sign In</button>
            </form>
            <p>Don't have an account yet? <a href="/Register">Create Account</a></p>
        </>
    )
};

export default Login;
