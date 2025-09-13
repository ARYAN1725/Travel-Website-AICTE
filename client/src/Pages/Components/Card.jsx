import React from 'react';
import './TourCards.css';

const Card = ({ country, image, title, description }) => {
  return (
    <div className="card">
      <h2 className="cardHeader"> {country} </h2>
      <div className="image">
        <img src={image} alt={country} />
      </div>
      <h3 className="cardText">{title}</h3>
      <p className="cardParagraph">{description}</p>
      <button className="cardButton">EXPLORE NOW</button>
    </div>
  );
};

export default Card;