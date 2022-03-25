import React, { useState } from 'react';
import { db } from '../config/Config';
import { collection, addDoc } from "firebase/firestore";

export const NewsletterLandingPage = () => {

    return (
        <section className="newsletter">
            <div className="newsletter__container container">
                <form>
                    <h3>Zapisz się do newslettera!</h3>
                    <p>Bądź na bieżąco z nowinkami ze świata ceramiki oraz otrzymuj w pierwszej kolejności informację o promocjach.</p>
                    <div className="email-box">
                        <i className="fa fa-envelope" />
                        <input className="tbox" type="email" placeholder="Wpisz swój adres e-mail"/>
                        <button className="newsletter-btn" type="submit" name="button">Zapisuję się</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

