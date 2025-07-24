import { useState } from 'react';
import axios from 'axios'; // Faltava também a importação do axios
import './css/Register.css';

const Register = () => {
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');

    const createUser = (e) => {
        e.preventDefault(); // Previne o recarregamento da página

        const newUser = {
            email: emailUser,
            password: passwordUser
        };

        axios.post("http://localhost:5500/Register", newUser)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <h1>Join FinBalance</h1>
            <form onSubmit={createUser}>
                <h2 className="title-Register">Register User</h2>
                <div className="userRegister-form-control">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={emailUser}
                        onChange={(e) => setEmailUser(e.target.value)}
                        required
                    />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={passwordUser}
                        onChange={(e) => setPasswordUser(e.target.value)}
                        required
                    />
                </div>
                <button className="userRegister-create-button" type="submit">
                    Sign Up
                </button>
                <p>Already have an account? <a href="/Login">Log In</a></p>
            </form>
        </div>
    );
};

export default Register;
