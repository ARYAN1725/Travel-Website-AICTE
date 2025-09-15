import React, { useEffect, useState } from "react";
import "./UnsplashGallery.css";

const destinations = [
    { name: "Rome", description: "The Eternal City, home to ancient landmarks like the Colosseum and the Roman Forum." },
    { name: "Venice", description: "A romantic city of canals, gondolas, and historic charm." },
    { name: "Florence", description: "Birthplace of the Renaissance, famous for art, architecture, and museums." },
    { name: "Leaning tower of Pisa", description: "A world heritage monument displaying wonders of the world." },
    { name: "Amalfi Coast", description: "A stunning coastal area with colorful towns and dramatic cliffs." },
    { name: "Milan", description: "Italy's fashion capital with a blend of history, design, and shopping." },
  ];

const UnsplashGalleryEngland = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = import.meta.env.VITE_UNSPLASH_KEY;

      const newImages = {};
      await Promise.all(
        destinations.map(async (dest) => {
          const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              dest.name + " Italy"
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

export default UnsplashGalleryEngland;
