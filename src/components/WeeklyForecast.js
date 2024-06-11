// src/components/WeeklyForecast.js
import React from 'react';
import './WeeklyForecast.css';

function WeeklyForecast({ weatherData }) {
  return (
    <div className="weekly-forecast">
      {weatherData.weekly.map((forecast, index) => (
        <div key={index} className="weekly-forecast-item">
          <p>{forecast.day}</p>
          <img src={forecast.icon} alt="Weather Icon" />
          <p>{forecast.temperatureHigh}/{forecast.temperatureLow}°</p>
        </div>
      ))}
    </div>
  );
}

export default WeeklyForecast;
