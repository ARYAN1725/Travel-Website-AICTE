import React, { useEffect, useState } from "react";
import "./UnsplashGallery.css";

const destinations = [
    { name: "London", description: "A vibrant capital city with iconic landmarks like Big Ben, the London Eye, and Buckingham Palace." },
    { name: "Lords cricket stadium", description: "The home of cricket, a historic and beautiful stadium." },
    { name: "Oxford", description: "The world-famous university city with stunning architecture and history." },
    { name: "Bath", description: "Known for its Roman-built baths and Georgian architecture." },
    { name: "Lake District", description: "A scenic region with lakes, mountains, and picturesque villages." },
    { name: "Cornwall", description: "A coastal paradise with rugged cliffs, sandy beaches, and charming fishing villages." },
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
              dest.name + " England"
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
