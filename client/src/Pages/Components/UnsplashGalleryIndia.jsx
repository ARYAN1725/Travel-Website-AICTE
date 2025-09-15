import React, { useEffect, useState } from "react";
import "./UnsplashGallery.css";

const destinations = [
  { name: "Taj Mahal", description: "Iconic ivory-white marble mausoleum in Agra." },
  { name: "Mumbai", description: "The bustling financial hub of India with a vibrant culture." },
  { name: "Jaipur", description: "The Pink City, famous for forts, palaces, and rich heritage." },
  { name: "Kerala Backwaters", description: "A serene network of lagoons and canals in Kerala." },
  { name: "Varanasi", description: "Spiritual capital of India with sacred river ghats." },
  { name: "Goa", description: "A coastal paradise known for beaches, nightlife, and Portuguese history." },
];

const UnsplashGalleryIndia = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

      const newImages = {};
      await Promise.all(
        destinations.map(async (dest) => {
          const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              dest.name + " India"
            )}&per_page=1&client_id=${accessKey}`
          );
          const data = await res.json();
          newImages[dest.name] = data.results[0]?.urls?.small;
        })
      );

      setImages(newImages);
    };

    fetchImages();
  }, []);

  return (
    <>
      {destinations.map((dest) => (
        <div className="card" key={dest.name}>
          <img src={images[dest.name]} alt={dest.name} />
          <h3>{dest.name}</h3>
          <p>{dest.description}</p>
        </div>
      ))}
    </>
  );
};

export default UnsplashGalleryIndia;
