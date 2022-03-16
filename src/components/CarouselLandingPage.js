import React from 'react';
import carousel1 from "../images/carousel1.jpg";
import carousel2 from '../images/carousel2.jpg';
import carousel3 from '../images/carousel3.jpg';
import carousel4 from '../images/carousel4.jpg';


export const CarouselLandingPage = () => {

    return (
        <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"/>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"/>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"/>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"/>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={carousel1} className="d-block w-100" alt="carousel1"/>
                </div>
                <div className="carousel-item">
                    <img src={carousel2} className="d-block w-100" alt="carousel2"/>
                </div>
                <div className="carousel-item">
                    <img src={carousel3} className="d-block w-100" alt="carousel3"/>
                </div>
                <div className="carousel-item">
                    <img src={carousel4} className="d-block w-100" alt="carousel4"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

