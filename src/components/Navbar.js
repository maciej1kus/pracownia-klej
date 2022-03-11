import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export const Navbar = () => {
    return (
        <div className="navbox">
            <div className="leftside">
                <Link to="/"><img src={logo} alt="pracownia-klej" className="logo" /></Link>
            </div>
            <div className="rightside">
                <Link to="signup" className="navlinks">Zarejestruj się</Link>
                <Link to="login" className="navlinks">Zaloguj się</Link>
            </div>
        </div>
    );
}

