import React, { useEffect, useState } from "react";
import "./UnsplashGallery.css";

const destinations = [
    { name: "Sydney Opera House", description: "Iconic harbor landmark and cultural hub." },
    { name: "Great Barrier Reef", description: "A paradise for snorkeling and diving." },
    { name: "Melbourne", description: "A vibrant city known for art, coffee, and sports." },
    { name: "Uluru", description: "A sacred sandstone monolith in the Outback." },
    { name: "Gold Coast", description: "Famous for surfing, beaches, and nightlife." },
    { name: "Tasmania", description: "Stunning wilderness and scenic landscapes." },
  ];

const UnsplashGalleryAustralia = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

      const newImages = {};
      await Promise.all(
        destinations.map(async (dest) => {
          const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              dest.name + " Australia"
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

export default UnsplashGalleryAustralia;
