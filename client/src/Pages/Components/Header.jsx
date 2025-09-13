import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="image-navbar-wrapper">
            <div className="navbar">
                <div className="company-name">
                    <h2>Travel World</h2>
                </div>
                <div className="navigation-links">
                    <ul className="navigationUl">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <button id="nav-login-button">LOGIN</button>
                    </ul>
                </div>
            </div>

            <div className="bannerText">
            <h2>Want to explore the world?</h2>
            <h3>Come join us...Check out our plans!</h3>
            <button id="bannerButton">EXPLORE NOW</button>
            </div>

        </div>
    )
}

export default Header