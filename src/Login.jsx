import { useState } from 'react';
import './css/Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState ({
    username:"",
    password:""
});

const toLogin = () => {
    e.preventDefault();

    axios.post('',loginData)
}

    return (
        <>
        <div className="container">
            <h1 className="LogoType">Wellcome to FinBalance</h1>
            <form>
                <h2 className="title-Login">Login</h2>
                    <div className="userLogin-Form-Control">
                        <input id="email" value={loginData.username} onChange={(e) => setLoginData({...loginData, username: e.target.value})} 
                        type="email" name="Email" placeholder="E-mail" required="true"/>

                        <input id="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} 
                        type="password" name="password" placeholder="Password" required="true"/>
                    </div>
                <button className="userLogin-submit-button" onClick={() => toLogin()}>Sign In</button>
                <p>Don't have an account yet? <a href="/Register">Create Account</a></p>
            </form>
            
        </div>
        </>
    )
};

export default Login;
