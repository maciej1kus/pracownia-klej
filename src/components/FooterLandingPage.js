import React from 'react';

export const FooterLandingPage = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__info">
                    <span className="footer__copy">
                        © 2022 by Pracownia Klej
                    </span>
                </div>
                <div className="footer__icons">
                    <a href="https://www.facebook.com"><i className="fa fa-facebook-f"/></a>
                    <a href="https://www.instagram.com"><i className="fa fa-instagram"/></a>
                </div>
            </div>
        </footer>
    );
};
