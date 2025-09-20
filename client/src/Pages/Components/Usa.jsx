import React from 'react'
import './Usa.css';
import Navbar from './Navbar';
import UnsplashGalleryUsa from './UnsplashGalleryUsa';
import Footer from './Footer';
import Weather from './Weather';

const France = () => {
    return (
        <>
            <Navbar />
            <div className="mainWrapper">
                <div className="mapInfo">
                    <div className="textContent">
                        <h2>United States of America</h2>
                        <p>Discover the United States, a land of endless adventures, iconic landmarks, and breathtaking diversity.</p>
                        <hr />
                        <p>From vibrant cities to awe-inspiring natural wonders, every journey here tells a unique story.</p>
                        <hr />
                        <p> <strong>Best time to visit:</strong> The best time to visit the USA is during spring (April–June) and autumn (September–October), offering pleasant weather and fewer crowds.</p>
                        <hr />
                    </div>
                    <div className="imageContent">
                        <img src="/assets/usa_map.jpg" alt="France map" />
                    </div>
                </div>

                <div className="weatherInfo">
                    <div className="imageContent">
                    <div>
                            <h2>USA Travel Guide</h2>
                            <Weather city="Washington DC" />
                        </div>
                        {/* <img src="/assets/usa_map.jpg" alt="Dummy image" /> */}
                    </div>

                    <div className="textContent">
                        <h2>Weather in USA</h2>
                        <p>With a vast range of climates, the USA offers sunny beaches in Florida, snowy mountains in Colorado, and everything in between.</p>
                        <hr />
                        <p>Summer is perfect for road trips, while winter transforms northern states into a snowy wonderland.</p>
                        <hr />
                    </div>
                </div>

                <div className="placesWrapper">
                    <h2>Places to visit</h2>
                    <div className="cardComponents">
                        <UnsplashGalleryUsa />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default France