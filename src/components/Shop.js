import React from 'react';
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { HeaderLandingPage } from "./HeaderLandingPage";


export const Shop = ({ user }) => {

    return (
        <div className="wrapper">
            <Navbar user={user} />
            <HeaderLandingPage />
            <Products />
        </div>
    );
}