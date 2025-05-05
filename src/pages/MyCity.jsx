import React, { useEffect, useState } from 'react';
import './styles/MyCity.css';

const MyCity = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'b44ba38cd866b9f75a3e98cfa67790d8';
  const city = 'Kyiv';
  const units = 'metric'; // Температура в Цельсіях
  const lang = 'ua'; // Українська мова

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        console.error('Помилка при отриманні погоди:', err);
        setError('Не вдалося завантажити дані про погоду.');
      }
    };

    fetchWeather();
  }, [apiKey, city, units, lang]);

  return (
    <div className="weather-container">
      <h1 className="weather-title">Моє місто</h1>
      {error ? (
        <p className="error-text">{error}</p>
      ) : weather ? (
        <div className="weather-card">
          <h2 className="weather-city">{weather.name}, {weather.sys.country}</h2>
          <p className="weather-info">
            🌡 Температура: <strong>{weather.main.temp}°C</strong>
          </p>
          <p className="weather-info">☁️ Опис: {weather.weather[0].description}</p>
          <p className="weather-info">💧 Вологість: {weather.main.humidity}%</p>
          <p className="weather-info">
            🌬 Вітер: {weather.wind.speed} м/с
          </p>
        </div>
      ) : (
        <p className="loading-text">Завантаження погоди...</p>
      )}
    </div>
  );
};

export default MyCity;
