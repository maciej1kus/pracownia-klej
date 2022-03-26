import React from 'react';
import { Link } from "react-router-dom";


export const ContactLandingPage = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__container container">
                <div className="contact__column">
                    <h4>Dla klienta</h4>
                    <ul>
                        <li><Link to="faq" className="col-navlink">FAQ</Link></li>
                        <li><Link to="delivery-and-returns" className="col-navlink">Dostawa i zwroty</Link></li>
                        <li><Link to="privacy-policy" className="col-navlink">Polityka prywatności</Link></li>
                        <li><Link to="terms-and-conditions" className="col-navlink">Regulamin</Link></li>
                    </ul>
                </div>
                <div className="contact__column">
                    <h4>Kontakt</h4>
                    <a href="mailto:pracowniaklej@gmail.com" className="col-navlink">
                        <i className="fa fa-envelope email-icon"/>
                        pracowniaklej@gmail.com
                    </a>
                    <p>ul. Poznańska 1 <br/>60-600 Poznań</p>
                    <a href="tel:+48123456789" className="col-navlink">
                        <i className="fa fa-phone phone-icon"/>
                        + 48 123 456 789
                    </a>
                </div>
            </div>
        </section>
    );
};
