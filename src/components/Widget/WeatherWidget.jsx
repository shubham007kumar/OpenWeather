import React, { useState, useEffect } from "react";
import styles from "./WeatherWidget.module.css";
const WeatherWidget = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Replace with your OpenWeather API key
    const apiKey = "b261351e7f694ddca7391249fe256d3c";
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${"gaya"}&units=metric&appid=${apiKey}`
        );
        const responseJson = await response.json();
        setWeather(responseJson);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const { main, wind, weather: weatherDetails, visibility, clouds } = weather;
  const temperature = main.temp;
  const feelsLike = main.feels_like;
  const humidity = main.humidity;
  const pressure = main.pressure;
  const windSpeed = wind.speed;
  const windDirection = wind.deg;
  const visibilityKm = visibility / 1000; // Convert to km
  const cloudiness = clouds.all;
  const weatherDescription = weatherDetails[0].description;
  const weatherIconCode = weatherDetails[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
  return (
    <div className={styles["weather-widget-container"]}>
      <h2>
        {city}, {weather.sys.country}
      </h2>
      <div className={styles["weather-widget-temp"]}>
        <img
          className={styles["weather-widget-icon"]}
          src={iconUrl}
          alt={weatherDescription}
        />
        <h3>{Math.round(temperature)}°C</h3>
      </div>
      <p>
        Feels like {Math.round(feelsLike)}°C. {weatherDetails[0].description}.
        Gentle Breeze.
      </p>
      <div className={styles["weather-widget-details"]}>
        <div>
          <p>Humidity: {humidity}%</p>
          <p>Pressure: {pressure} hPa</p>
          <p>Visibility: {visibilityKm} km</p>
        </div>
        <div>
          <p>
            Wind: {windSpeed} m/s, {windDirection}°
          </p>
          <p>Clouds: {cloudiness}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
