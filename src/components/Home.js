import React from 'react';
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { Header } from './home-landing-page/Header';

export const Home = ({ user }) => {

    return (
        <>
            <Navbar user={user} />
            <Header />
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