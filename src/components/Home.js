import React from 'react';
import { Navbar } from "./Navbar";
import { Products } from "./Products";

export const Home = () => {
  return (
        <div className="wrapper">
            <Navbar />
            <Products />
        </div>
    );
}
