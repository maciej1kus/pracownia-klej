import React from 'react';
import { Navbar } from "./Navbar";



export const Workshops = ({ user }) => {

    return (
        <>
            <Navbar user={user} />
            <span>Strona w budowie - warsztaty</span>
        </>
    );
}