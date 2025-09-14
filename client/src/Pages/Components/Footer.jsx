import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footerWrapper">

            <div className="contactUsForm">
            <form className="contactForm">
                <h3>CONTACT US</h3>
                <input type="text" placeholder="Enter your name"/>
                <input type="text" placeholder="Enter your email"/>
                <textarea name="textarea" id="textarea" rows="15" columns="25" placeholder="Enter your message..."></textarea>
                <button>SUBMIT</button>
            </form>
            </div>

            <div className="siteLinks">
                <ul className="links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Plans and Packages</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>

            <div className="AboutUs">
                <h2>About Us</h2>
                <img src="./assets/travel_world.jpg" alt="Travel World logo" />
                <p>Founded in 2017, Travel World aims to make people experience the beauty and the wonders of the world! Every tour at Travel World is planned with ultimate love, dedication and committment.</p>
                <button>READ MORE</button>
            </div>

        </div>

  )
}

export default Footer