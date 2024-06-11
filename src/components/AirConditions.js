// src/components/AirConditions.js
import React from 'react';
import './AirConditions.css';

function AirConditions({ weatherData }) {
  return (
    <div className="air-conditions">
      <p>Real Feel: {weatherData.realFeel}°</p>
      <p>Wind: {weatherData.windSpeed} km/h</p>
      <p>UV Index: {weatherData.uvIndex}</p>
      <p>Chance of rain: {weatherData.chanceOfRain}%</p>
    </div>
  );
}

export default AirConditions;
