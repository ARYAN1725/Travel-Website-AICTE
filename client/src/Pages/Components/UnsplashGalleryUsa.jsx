import React, { useEffect, useState } from "react";
import "./UnsplashGallery.css";

const destinations = [
    { name: "New York City", description: "The city that never sleeps, home to Times Square and Central Park." },
    { name: "Grand Canyon", description: "A breathtaking natural wonder carved by the Colorado River." },
    { name: "Los Angeles", description: "The entertainment capital with Hollywood glam and sunny beaches." },
    { name: "Yellowstone National Park", description: "A geothermal paradise with wildlife and stunning landscapes." },
    { name: "Miami", description: "A vibrant coastal city with nightlife, art, and tropical beaches." },
    { name: "Las Vegas", description: "A dazzling desert city known for casinos, shows, and entertainment." },
  ];

const UnsplashGalleryUsa = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

      const newImages = {};
      await Promise.all(
        destinations.map(async (dest) => {
          const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              dest.name + " USA"
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

export default UnsplashGalleryUsa;
