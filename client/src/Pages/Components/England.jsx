import React from 'react'
import './England.css';
import Navbar from './Navbar';
import UnsplashGalleryEngland from './UnsplashGalleryEngland';
import Footer from './Footer';
import Weather from './Weather';

const England = () => {
    return (
        <>
            <Navbar />
            <div className="mainWrapper">
                <div className="mapInfo">
                    <div className="textContent">
                        <h2>England</h2>
                        <p>England blends rich history, stunning countryside, and vibrant cities, making it a must-visit destination.</p>
                        <hr />
                        <p>From ancient castles to iconic landmarks like Big Ben, every corner tells a story.</p>
                        <hr />
                        <p> <strong>Best time to visit:</strong> The best time to visit England is late spring (May–June) or early autumn (September) for pleasant weather and fewer crowds..</p>
                        <hr />
                    </div>
                    <div className="imageContent">
                        <img src="/assets/england_map.png" alt="France map" />
                    </div>
                </div>

                <div className="weatherInfo">
                    <div className="imageContent">
                    <div>
                            <h2>England Travel Guide</h2>
                            <Weather city="London" />
                        </div>
                        {/* <img src="/assets/england_map.png" alt="Dummy image" /> */}
                    </div>

                    <div className="textContent">
                        <h2>Weather in England</h2>
                        <p>England’s weather is mild and temperate, with cool summers and relatively warm winters.</p>
                        <hr />
                        <p>Rain is frequent but light, so carrying an umbrella is always a smart idea.</p>
                        <hr />
                    </div>
                </div>

                <div className="placesWrapper">
                    <h2>Places to visit</h2>
                    <div className="cardComponents">
                        <UnsplashGalleryEngland />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default England