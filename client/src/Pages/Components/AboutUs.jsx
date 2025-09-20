import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
    <Navbar />  
    <div className="aboutusWrapper">

      <div className="image-text">
        <div className="imageContent">
          <img src="/assets/travel_world.jpg" alt="Travel World Image" />
        </div>

        <div className="textContainer">
          <p className="textPara">Travel World is your trusted companion in exploring the wonders of the globe. From bustling cities to serene beaches, our mission is to make every journey unforgettable and seamless for our travelers. With years of experience in the travel industry, we specialize in curating personalized travel experiences that cater to your unique preferences. Whether you are seeking adventure, relaxation, or cultural immersion, Travel World has something special for you. Our dedicated team of travel experts is passionate about discovering hidden gems and sharing authentic experiences with our clients. We believe that travel is not just about destinations, but about the memories and connections you create along the way. At Travel World, we prioritize comfort, safety, and sustainability, ensuring that every journey is enjoyable and responsible.</p>

          <p className="textPara">Join us on a journey of discovery, adventure, and lifelong memories. With Travel World, the world is at your fingertips, ready to be explored one destination at a time.</p>
        </div>
        </div>

        <div className="happyFamilyWrapper">

          <div className="textContainer">
            <p className="textPara">At Travel World, we believe vacations aren’t just about places, but about the smiles and memories you take back home.</p>
            <p className="textPara">🌍 Wide Variety of Destinations – From snowy mountains to sunny beaches, we offer journeys that fit every dream.</p>
            <p className="textPara">👨‍👩‍👧‍👦 Happy Families, Happier Memories – Thousands of families have trusted us to plan their perfect getaways.</p>
            <p className="textPara">💬 Real Stories, Real Joy – Hear from travelers who turned their dream trips into unforgettable experiences.</p>
            <p className="textPara">🌟 Personalized for You – Whether it’s adventure, relaxation, or cultural exploration, we make sure every trip feels unique.</p>
            <p className="textPara">Because at Travel World, every journey is more than a trip — it’s a celebration of togetherness. ❤️</p>
          </div>

        <div className="imageContainer">
            <img src="/assets/happy_family.jpg" alt="Happy Family Image" />
        </div>
        </div>

     

    </div>
    <Footer/>
    </>
  )
}

export default AboutUs