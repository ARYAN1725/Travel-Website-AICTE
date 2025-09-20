import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerWrapper">

            <div className="contactUsForm">
                <form className="contactForm">
                    <h3>CONTACT US</h3>
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Enter your email" />
                    <textarea name="textarea" id="textarea" rows="15" columns="25" placeholder="Enter your message..."></textarea>
                    <button>SUBMIT</button>
                </form>
            </div>

            <div className="siteLinks">
                <ul className="links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#tourCards">Plans and Packages</a></li>
                    <li><a href="/aboutus">About</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>

            <div className="socialProfiles">

                <h3>Follow us on...</h3>

                <div className="contactInfo">
                    <img src="/assets/call24hr.svg" alt="Phone" className="icon" />
                    <span>+1 234 567 890</span>
                </div>
            <div className="socialIcons">
                <a href="https://www.instagram.com/right_choice_mindset/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/instagram.svg" alt="Instagram" className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/aryan-patil-62571b356/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/linkedin.svg" alt="LinkedIn" className="icon" />
                </a>
                <a href="https://x.com/aryanpatil1725" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/twitter.svg" alt="Twitter" className="icon" />
                </a>
                </div>
            </div>

            <div className="AboutUs">
                <h2>About Us</h2>
                <img src="./assets/travel_world.jpg" alt="Travel World logo" />
                <p>Founded in 2017, Travel World aims to make people experience the beauty and the wonders of the world! Every tour at Travel World is planned with ultimate love, dedication and committment.</p>
                <button className="aboutusButton"> <a href="/aboutus">READ MORE</a></button>
            </div>

        </div>

    )
}

export default Footer