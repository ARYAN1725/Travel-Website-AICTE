import React from 'react';
import './TourCards.css';
import Card from './Card';
import { Routes, Route, Link } from "react-router-dom";

const TourCards = () => {
  const cardData = [
    {
      country: "🇮🇳 India",
      image: "/assets/india.png",
      title: "Culture and diversity",
      description: "A beautiful, cultural and diverse country."
    },
    {
      country: "🇫🇷 France",
      image: "/assets/paris.jpg",
      title: "7 exciting days, 7 beautiful cities",
      description: "A timeless blend of romance, art, and breathtaking landscapes."
    },
    {
      country: "🇮🇹 Italy",
      image: "/assets/italy.png",
      title: "10 days of history and culture",
      description: "Explore ancient ruins, vibrant cities, and stunning coastlines."
    },
    {
      country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England",
      image: "/assets/england.jpg",
      title: "Culture, custom and presentation",
      description: "Where history meets modern charm, from iconic castles to vibrant city streets."
    },
    {
      country: "🇺🇸 USA",
      image: "/assets/usa.jpg",
      title: "Explore diverse landscapes",
      description: "From bustling cities to breathtaking national parks."
    },
    {
      country: "🇦🇺 Australia",
      image: "/assets/australia.jpg",
      title: "Adventure down under",
      description: "Experience beaches, wildlife, and vibrant cities."
    }
  ];

  return (
    <div className="cardWrapper">
      {cardData.map((card, index) => (
        <Card 
          key={index}
          country={card.country}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default TourCards;
