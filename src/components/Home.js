import React from 'react';
import { Navbar } from "./Navbar";
import { HeaderLandingPage } from './HeaderLandingPage';
import { CarouselLandingPage } from './CarouselLandingPage';
import { QuoteLandingPage } from './QuoteLandingPage';
import { NewsletterLandingPage } from "./NewsletterLandingPage";


export const Home = ({ user }) => {

    return (
        <>
            <Navbar user={user} />
            <HeaderLandingPage />
            <main>
                <CarouselLandingPage />
                <QuoteLandingPage />
                <NewsletterLandingPage />
            </main>
            <span>Strona w budowie </span>
        </>
    );
}