import { useState } from 'react';
import './css/Login.css';

const Login = () => {
    return (
        <>
        <div className="container">
            <h1 className="LogoType">Wellcome to FinBalance</h1>
            <form>
                <h2 className="title-Login">Login</h2>
                    <div className="userLogin-Form-Control">
                        <input id="email" type="email" name="Email" placeholder="E-mail" requerid="true"/>
                        <input id="password" type="password" name="password" placeholder="Password" requerid="true"/>
                    </div>
                <button className="userLogin-submit-button" type="submit">Sign In</button>
                <p>Don't have an account yet? <a href="/Register">Create Account</a></p>
            </form>
            
        </div>
        </>
    )
};

export default Login;
