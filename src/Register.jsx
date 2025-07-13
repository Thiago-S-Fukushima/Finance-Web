import { useState } from 'react';
import './css/Register.css';

const Register = () => {
    return(
        <>
            <div className="container">
                <h1>Join FinBalance</h1>
                    <form>
                        <h2 className="title-Register">Register User</h2>
                        <div className="userRegister-form-control">
                            <input id="email" type="email" name="email" placeholder="E-mail" required="true"/>
                            <input id="password" type="password" name="password" placeholder="Password" required="true"/>
                            <input id="confirmPassword" type="password" name="password" placeholder="Confirm Password" required="true"/>
                        </div>
                        <button className="userRegister-create-button" type="submit">Sign Up</button>
                        <p>Already have an account? <a href="/Login">Log In</a></p>
                    </form>
            </div>
        </>
    )
}

export default Register;