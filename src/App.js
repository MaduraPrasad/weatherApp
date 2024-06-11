// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import WeeklyForecast from './components/WeeklyForecast';
import AirConditions from './components/AirConditions';
import './App.css';

const API_KEY = '80e2dd52f6edfc4c2ab937d179b5b19c'; 

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleCitySearch = (city) => {
    setCity(city);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => {
        const data = response.data;
        setWeatherData({
          temperature: data.main.temp,
          chanceOfRain: data.clouds.all,
          icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          realFeel: data.main.feels_like,
          windSpeed: data.wind.speed,
          uvIndex: 3, // Placeholder: OpenWeatherMap does not provide UV index in the current weather endpoint
          daily: [
            { time: '6:00 AM', temperature: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { time: '9:00 AM', temperature: data.main.temp + 3, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { time: '12:00 PM', temperature: data.main.temp + 5, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { time: '3:00 PM', temperature: data.main.temp + 7, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { time: '6:00 PM', temperature: data.main.temp + 2, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { time: '9:00 PM', temperature: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
          ],
          weekly: [
            { day: 'Mon', temperatureHigh: data.main.temp + 5, temperatureLow: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { day: 'Tue', temperatureHigh: data.main.temp + 5, temperatureLow: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { day: 'Wed', temperatureHigh: data.main.temp + 5, temperatureLow: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { day: 'Thu', temperatureHigh: data.main.temp + 5, temperatureLow: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { day: 'Fri', temperatureHigh: data.main.temp + 5, temperatureLow: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { day: 'Sat', temperatureHigh: data.main.temp + 5, temperatureLow: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
            { day: 'Sun', temperatureHigh: data.main.temp + 5, temperatureLow: data.main.temp, icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` },
          ],
        });
      })
      .catch(error => {
        console.error("Error fetching the weather data", error);
      });
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="menu">
          <button>Weather</button>
          <button>Cities</button>
          <button>Map</button>
          <button>Settings</button>
        </div>
      </div>
      <div className="main-content">
      <SearchBar handleCitySearch={handleCitySearch} />
        {weatherData && (
          <>
            <WeatherDetails weatherData={weatherData} city={city} />
            <Forecast weatherData={weatherData} />
            <AirConditions weatherData={weatherData} />
            <WeeklyForecast weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
