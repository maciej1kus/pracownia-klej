import React from 'react';

export const NewsletterLandingPage = () => {
    return (
        <section className="newsletter">
            <div className="newsletter__container container">
                <form action="">
                    <h3>Zapisz się do newslettera!</h3>
                    <p>Bądź na bieżąco z nowinkami ze świata ceramiki oraz otrzymuj w pierwszej kolejności informację o promocjach.</p>
                    <div className="email-box">
                        <i className="fa fa-envelope" />
                        <input type="email" name="" value="" placeholder="Wpisz swój adres e-mail"/>
                        <button type="button" name="button">Zapisuję się</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

