import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn"/>
                    <label htmlFor="menu__btn" className="menu__toggle">
                            <span/>
                            <span/>
                            <span/>
                    </label>
                    <ul className="header__nav">
                        <li className="nav__element"><Link to="/" className="nav__link">Home</Link></li>
                        <li className="nav__element"><Link to="shop" className="nav__link">Sklep</Link></li>
                        <li className="nav__element"><Link to="workshops" className="nav__link">Warsztaty</Link></li>
                        <li className="nav__element"><Link to="about-me" className="nav__link">Historia</Link></li>
                        <li className="nav__element"><a href="#contact" className="nav__link">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

