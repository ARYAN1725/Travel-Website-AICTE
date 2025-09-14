import React, { useEffect, useState } from "react";
import "./UnsplashGallery.css";

const destinations = [
  { name: "Paris", description: "The city of lights and romance." },
  { name: "Strasbourg", description: "Charming canals and medieval architecture." },
  { name: "Nice", description: "Beautiful beaches along the French Riviera." },
  { name: "Lyon", description: "Famous for gastronomy and historic sites." },
  { name: "Bordeaux", description: "Renowned wine region and riverside views." },
  { name: "Marseille", description: "Vibrant port city with Mediterranean flair." },
];

const UnsplashGallery = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

      const newImages = {};
      await Promise.all(
        destinations.map(async (dest) => {
          const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${dest.name}&per_page=1&client_id=${accessKey}`
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

export default UnsplashGallery;
