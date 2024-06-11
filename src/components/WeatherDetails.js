// src/components/WeatherDetails.js
import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ weatherData, city }) {
  return (
    <div className="weather-details">
      <h1>{city}</h1>
      <p>Chance of rain: {weatherData.chanceOfRain}%</p>
      <div className="temperature">
        <h1>{weatherData.temperature}°</h1>
        <img src={weatherData.icon} alt="Weather Icon" />
      </div>
    </div>
  );
}

export default WeatherDetails;
