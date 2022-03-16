import React, { useEffect } from 'react';
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/Config";
import { HeaderLandingPage } from "./HeaderLandingPage";


export const Shop = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <div className="wrapper">
            <Navbar user={user} />
            <HeaderLandingPage />
            <Products />
        </div>
    );
}