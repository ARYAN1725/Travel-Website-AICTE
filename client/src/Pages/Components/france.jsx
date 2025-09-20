import React from 'react'
import './france.css';
import Navbar from './Navbar';
import UnsplashGallery from './UnsplashGallery';
import Footer from './Footer';
import Weather from './Weather';

const France = () => {
    return (
        <>
            <Navbar />
            <div className="mainWrapper">
                <div className="mapInfo">
                    <div className="textContent">
                        <h2>France</h2>
                        <p>Experience the timeless charm of France, where every street tells a story and every view feels like a painting.</p>
                        <hr />
                        <p>From the sparkling lights of Paris to the sun-kissed vineyards of Bordeaux, France is a journey of elegance, culture, and unforgettable memories.</p>
                        <hr />
                        <p> <strong>Best time to visit:</strong> The best time to visit France is late spring or early autumn, when the weather is perfect and crowds are lighter.</p>
                        <hr />
                    </div>
                    <div className="imageContent">
                        <img src="/assets/france_map.png" alt="France map" />
                    </div>
                </div>

                <div className="weatherInfo">
                    <div className="imageContent">
                    <div>
                            <h2>France Travel Guide</h2>
                            <Weather city="Paris" />
                        </div>
                        {/* <img src="/assets/france_map.png" alt="Dummy image" /> */}
                    </div>

                    <div className="textContent">
                        
                        <h2>Weather in France</h2>
                        <p>Spring and autumn bring mild, pleasant temperatures perfect for sightseeing, while summer is warm and lively with festivals across the country.</p>
                        <hr />
                        <p>Winter can be chilly, especially in northern regions and the Alps, offering snow for skiing and cozy indoor experiences.</p>
                        <hr />
                    </div>
                </div>

                <div className="placesWrapper">
                    <h2>Places to visit</h2>
                    <div className="cardComponents">
                        <UnsplashGallery />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default France