import React from 'react';
import './TourCards.css';
import { Routes, Route, Link } from "react-router-dom";

const Card = ({ country, image, title, description }) => {
  // Extract only letter-words from the country string (ignores emojis and punctuation)
  const words = (country.match(/[A-Za-z]+/g) || []);
  const countryRoute = words.length ? `/${words.join('-').toLowerCase()}` : '/';
  return (
    <div className="tourCard" id="tourCard">
      <h2 className="cardHeader"> {country} </h2>
      <div className="image">
        <img src={image} alt={country} />
      </div>
      <h3 className="cardText">{title}</h3>
      <p className="cardParagraph">{description}</p>
      <Link to={countryRoute}>
      <button className="cardButton">EXPLORE NOW</button>
      </Link>
    </div>
  );
};

export default Card;