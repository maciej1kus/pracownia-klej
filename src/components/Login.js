import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from '../config/Config';
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
        }).catch(err => setError(err.message));
    }

    return (
        <div className='container'>
            <br />
            <h2>Logowanie</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                       onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                       onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>Zaloguj się</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            <span>Nie masz jeszcze konta? <Link to="signup">Zarejestruj się</Link></span>
        </div>
    );
}

