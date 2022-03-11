import React, { useState } from 'react';
import { auth, db } from '../config/Config';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Signup = (props) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Rejestracja
    const signup = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then(async (cred) => {
            //nazwa dokumentu z Użytkownikiem będzie taka sama jak User UID
            await setDoc(doc(db, "SignedUsersData", `${cred.user.uid}`), {
                Name: name,
                Surname: surname,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return (
        <div className="container">
            <br/>
            <h2>Zarejestruj się</h2>
            <hr/>
            <form autoComplete="off" className="form-group" onSubmit={signup}>
                <label htmlFor="name">Imię:</label>
                <input type="text" className="form-control" required
                       onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label htmlFor="surname">Nazwisko:</label>
                <input type="text" className='form-control' required
                       onChange={(e) => setSurname(e.target.value)} value={surname} />
                <br />
                <label htmlFor="email">Adres e-mail:</label>
                <input type="email" className="form-control" required
                       onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="passowrd">Hasło:</label>
                <input type="password" className="form-control" required
                       onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className="btn btn-success btn-md mybtn">Zarejestruj się</button>
            </form>
            {error && <span className="error-msg">{error}</span>}
            <br/>
            <span>Posiadasz już konto? <Link to="login">Zaloguj się</Link></span>
        </div>
    );
}


