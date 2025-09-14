import React from 'react';
import './TourCards.css';
import { Routes, Route, Link } from "react-router-dom";

const Card = ({ country, image, title, description }) => {
  return (
    <div className="tourCard">
      <h2 className="cardHeader"> {country} </h2>
      <div className="image">
        <img src={image} alt={country} />
      </div>
      <h3 className="cardText">{title}</h3>
      <p className="cardParagraph">{description}</p>
      <Link to="/france">
      <button className="cardButton">EXPLORE NOW</button>
      </Link>
    </div>
  );
};

export default Card;