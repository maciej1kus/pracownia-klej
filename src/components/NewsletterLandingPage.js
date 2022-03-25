import React, { useState } from 'react';
import { db } from '../config/Config';
import { collection, addDoc } from "firebase/firestore";

export const NewsletterLandingPage = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    //Zapisywanie się do newslettera
    const signup = (e) => {
        e.preventDefault();

        addDoc(collection(db, "NewsletterList"), {
            Email: email
        }).then(() => {
            setEmail('');
        }).catch(err => setError(err.message));
    }

    return (
        <section className="newsletter">
            <div className="newsletter__container container">
                <form onSubmit={signup}>
                    <h3>Zapisz się do newslettera!</h3>
                    <p>Bądź na bieżąco z nowinkami ze świata ceramiki oraz otrzymuj w pierwszej kolejności informacje o promocjach.</p>
                    <div className="email-box">
                        <i className="fa fa-envelope" />
                        <input className="tbox" type="email" placeholder="Wpisz swój adres e-mail"
                               onChange={(e) => setEmail(e.target.value)} value={email} />
                        <button className="newsletter-btn" type="submit" name="button">Zapisuję się</button>
                        {error && <span>{error}</span>}
                    </div>
                </form>
            </div>
        </section>
    );
};

