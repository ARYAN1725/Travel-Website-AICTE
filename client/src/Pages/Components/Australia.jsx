import React from 'react'
import './Australia.css';
import Navbar from './Navbar';
import UnsplashGalleryAustralia from './UnsplashGalleryAustralia';
import Footer from './Footer';
import Weather from './Weather';

const Australia = () => {
    return (
        <>
            <Navbar />
            <div className="mainWrapper">
                <div className="mapInfo">
                    <div className="textContent">
                        <h2>Australia</h2>
                        <p>Australia is a land of stunning beaches, vibrant cities, and breathtaking natural wonders.</p>
                        <hr />
                        <p>From the Great Barrier Reef to the rugged Outback, adventure awaits at every corner..</p>
                        <hr />
                        <p> <strong>Best time to visit:</strong> The best time to visit Australia is during spring (September–November) or autumn (March–May) for perfect weather and fewer crowds.</p>
                        <hr />
                    </div>
                    <div className="imageContent">
                        <img src="/assets/australia_map.jpg" alt="France map" />
                    </div>
                </div>

                <div className="weatherInfo">
                    <div className="imageContent">
                    <div>
                            <h2>Australia Travel Guide</h2>
                            <Weather city="Sydney" />
                        </div>
                        {/* <img src="/assets/australia_map.jpg" alt="Dummy image" /> */}
                    </div>

                    <div className="textContent">
                        <h2>Weather in Australia</h2>
                        <p>Summer brings sunny beach days and vibrant festivals, while winter offers cozy escapes and whale watching.</p>
                        <hr />
                        <p>Australia’s seasons are opposite to the Northern Hemisphere, with hot summers (Dec–Feb) and mild winters (Jun–Aug), perfect for year-round adventures.</p>
                        <hr />
                    </div>
                </div>

                <div className="placesWrapper">
                    <h2>Places to visit</h2>
                    <div className="cardComponents">
                        <UnsplashGalleryAustralia />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Australia