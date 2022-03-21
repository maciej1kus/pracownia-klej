import React from 'react';
import { Navbar } from "./Navbar";
import { HeaderLandingPage } from './HeaderLandingPage';
import { CarouselLandingPage } from './CarouselLandingPage';
import { QuoteLandingPage } from './QuoteLandingPage';


export const Home = ({ user }) => {

    return (
        <>
            <Navbar user={user} />
            <HeaderLandingPage />
            <main>
                <CarouselLandingPage />
                <QuoteLandingPage />
            </main>
            <span>Strona w budowie </span>
        </>
    );
}