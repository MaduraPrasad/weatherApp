// src/components/Forecast.js
import React from 'react';
import './Forecast.css';

function Forecast({ weatherData }) {
  return (
    <div className="forecast">
      {weatherData.daily.map((forecast, index) => (
        <div key={index} className="forecast-item">
          <p>{forecast.time}</p>
          <img src={forecast.icon} alt="Weather Icon" />
          <p>{forecast.temperature}°</p>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
