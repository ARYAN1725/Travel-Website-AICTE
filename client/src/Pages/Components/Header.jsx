import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="image-navbar-wrapper">
            <div className="navbar">
                <div className="company-name">
                    <h2>Travel World</h2>
                </div>
                <div className="navigation-links">
                    <ul className="navigationUl">
                            <li><a href="/">Home</a></li>
                            <li><a href="#tourCard">Plans</a></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/login">LOGIN</Link></li>
                        </ul>
                </div>
            </div>

            <div className="bannerText">
                <h2>Want to explore the world?</h2>
                <h3>Come join us...Check out our plans!</h3>
                <button id="bannerButton" >
                <a href="#tourCard">EXPLORE NOW </a></button>
            </div>

        </div>
    )
}

export default Header