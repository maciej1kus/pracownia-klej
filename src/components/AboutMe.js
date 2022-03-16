import React from 'react';
import { Navbar } from "./Navbar";



export const AboutMe = ({ user }) => {

    return (
        <>
            <Navbar user={user} />
            <span>Strona w budowie - o mnie</span>
        </>
    );
}