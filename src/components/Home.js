import React from 'react';
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { HeaderLandingPage } from './HeaderLandingPage';
import { CarouselLandingPage } from './CarouselLandingPage';


export const Home = ({ user }) => {

    return (
        <>
            <Navbar user={user} />
            <HeaderLandingPage />
            <main>
                <CarouselLandingPage />
            </main>
            <span>Strona w budowie </span>
            <br/>
            <Link to="shop" className="navlinks">Sklep</Link>
            <br/>
            <Link to="workshops" className="navlinks">Warsztaty</Link>
            <br/>
            <Link to="about-me" className="navlinks">O mnie</Link>
        </>
    );
}