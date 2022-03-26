import React from 'react';
import { Navbar } from "./Navbar";



export const PrivacyPolicy = ({ user }) => {

    return (
        <>
            <Navbar user={user} />
            <span>Strona w budowie - Polityka prywatności</span>
        </>
    );
}