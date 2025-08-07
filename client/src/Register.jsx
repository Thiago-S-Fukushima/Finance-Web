import { useState } from 'react';
import './css/Register.css';
import Axios from "axios";

const Register = () => {

    const [ emailUser, setEmailUser] = useState('')
    const [ passwordUser, setPasswordUser ] = useState('')
    const [ nameUser, setNameUser ] = useState('')

  

    function createUser(e){
        e.preventDefault();
        
        const newUser = {
            name: nameUser, // Incluído o nome de usuário
            email: emailUser,
            password: passwordUser
        } 
        
        Axios.post("http://localhost:5500/register", { // Ajustado a porta
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }

    return(
        <>
            <div className="container">
                <h1>Join FinBalance</h1>
                    <form>
                        <h2 className="title-Register">Register User</h2>
                        <div className="userRegister-form-control">
                            <input id="nome" type="text" name="name" placeholder="nome" required onChange={e => setNameUser(e.target.value)}/> 
                            <input id="email" type="email" name="email" placeholder="E-mail" required onChange={e => setEmailUser(e.target.value)}/>
                            <input id="password" type="password" name="password" placeholder="Password" required onChange={e => setPasswordUser(e.target.value)}/>
                        </div>
                        <button className="userRegister-create-button" type="button" onClick={createUser}>Sign Up</button>
                        <p>Already have an account? <a href="/">Log In</a></p>
                    </form>
            </div>
        </>
    )
}

export default Register;