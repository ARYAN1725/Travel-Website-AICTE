import React from 'react'
import './Italy.css';
import Navbar from './Navbar';
import UnsplashGalleryItaly from './UnsplashGalleryItaly';
import Footer from './Footer';
import Weather from './Weather';

const Italy = () => {
    return (
        <>
            <Navbar />
            <div className="mainWrapper">
                <div className="mapInfo">
                    <div className="textContent">
                        <h2>Italy</h2>
                        <p>Italy is a land of art, history, and culture, home to ancient ruins, stunning cathedrals, and world-class cuisine</p>
                        <hr />
                        <p>From the romantic canals of Venice to the rolling hills of Tuscany, every corner of Italy tells a unique story.</p>
                        <hr />
                        <p> <strong>Best time to visit:</strong> April to June and September to October, when the weather is pleasant, and crowds are smaller.</p>
                        <hr />
                    </div>
                    <div className="imageContent">
                        <img src="/assets/italy_map.png" alt="France map" />
                    </div>
                </div>

                <div className="weatherInfo">
                    <div className="imageContent">
                    <div>
                            <h2>ItalyTravel Guide</h2>
                            <Weather city="Venice" />
                        </div>
                        {/* <img src="/assets/italy_map.png" alt="Dummy image" /> */}
                    </div>

                    <div className="textContent">
                        <h2>Weather in Italy</h2>
                        <p>Summers are hot, especially in southern regions, while coastal areas enjoy cool breezes.</p>
                        <hr />
                        <p>Winters are mild in the south but can be cold and snowy in the Alps, making it perfect for skiing.</p>
                        <hr />
                    </div>
                </div>

                <div className="placesWrapper">
                    <h2>Places to visit</h2>
                    <div className="cardComponents">
                        <UnsplashGalleryItaly />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Italy