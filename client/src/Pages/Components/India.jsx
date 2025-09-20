import React from 'react'
import './India.css';
import Navbar from './Navbar';
import UnsplashGalleryIndia from './UnsplashGalleryIndia';
import Footer from './Footer';
import Weather from './Weather';

const France = () => {
    return (
        <>
            <Navbar />
            <div className="mainWrapper">
                <div className="mapInfo">
                    <div className="textContent">
                        <h2>India</h2>
                        <p>India is a land of diverse cultures, vibrant traditions, and stunning landscapes ranging from the Himalayas to tropical beaches. Its rich history and cuisine make it a top destination for travelers.</p>
                        <hr />
                        <p>From the sparkling lights of Paris to the sun-kissed vineyards of Bordeaux, France is a journey of elegance, culture, and unforgettable memories.</p>
                        <hr />
                        <p> <strong>Best time to visit:</strong> October to March offers pleasant weather, perfect for sightseeing and exploring.</p>
                        <hr />
                    </div>
                    <div className="imageContent">
                        <img src="/assets/india_map.jpg" alt="France map" />
                    </div>
                </div>

                <div className="weatherInfo">
                    <div className="imageContent">
                    <div>
                            <h2>India Travel Guide</h2>
                            <Weather city="Mumbai" />
                        </div>
                        {/* <img src="/assets/india_map.jpg" alt="Dummy image" /> */}
                    </div>

                    <div className="textContent">
                        <h2>Weather in India</h2>
                        <p>India has a tropical climate with hot summers, a rainy monsoon season, and mild winters. Weather varies widely between regions, from snowy mountains to sunny coasts.</p>
                        <hr />
                        <p>The culturally diverse country has variations in weathers as we navigate through the regions.</p>
                        <hr />
                    </div>
                </div>

                <div className="placesWrapper">
                    <h2>Places to visit</h2>
                    <div className="cardComponents">
                        <UnsplashGalleryIndia />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default France