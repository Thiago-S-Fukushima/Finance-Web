import { useState } from 'react';

const Register = () => {
    return(
        <>
            <h1 className="title-Register">Register User</h1>
            <form>
                <div className="userRegister-form-control">
                    <input id="email" type="email" name="email" placeholder="E-mail" required="true"/>
                    <input id="password" type="password" name="password" placeholder="Password" required="true"/>
                </div>
                <button className="userRegister-create-button" type="submit">Sign Up</button>
            </form>

            <p>Already have an account? <a href="/Login">Log In</a></p>
        </>
    )
}

export default Register;