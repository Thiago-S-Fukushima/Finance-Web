import { useState } from 'react';
import axios from 'axios';
import './css/Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState ({
    email:"",
    password:""
});

const toLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5173/login',loginData)
    .then(res => {
        console.log(res.data);
    })

    .err(err => {
        console.log(err);
    })
}

    return (
        <>
        <div className="container">
            <h1 className="LogoType">Wellcome to FinBalance</h1>
            <form>
                <h2 className="title-Login">Login</h2>
                    <div className="userLogin-Form-Control">
                        <input id="email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} 
                        type="email" name="Email" placeholder="E-mail" required/>

                        <input id="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
                        type="password" name="password" placeholder="Password" required/>
                    </div>
                <button className="userLogin-submit-button" onClick={() => toLogin()}>Sign In</button>
                <p>Don't have an account yet? <a href="/Register">Create Account</a></p>
            </form>           
        </div>
        </>
    )
};

export default Login;
