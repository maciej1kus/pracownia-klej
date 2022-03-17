import React from 'react';
import { Navbar } from "./Navbar";
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
        </>
    );
}