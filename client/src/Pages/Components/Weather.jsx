import React, { useEffect, useState } from "react";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = import.meta.env.VITE_OPENWEATHER_KEY; // 👈 from .env
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        const data = await res.json();
        console.log("Weather API data:", data); // 👈 check response in console
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setError(error.message);
      }
    };

    fetchWeather();
  }, [city]);

  if (error) return <p style={{ color: "red" }}>⚠️ {error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  return (
    <div>
      <h3>Weather in {weather.name}</h3>
      <p>🌡️ Temperature: {weather.main.temp} °C</p>
      <p>☁️ Condition: {weather.weather[0].description}</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
