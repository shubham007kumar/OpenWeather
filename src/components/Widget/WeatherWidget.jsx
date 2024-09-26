import React, { useState, useEffect } from "react";
import styles from "./WeatherWidget.module.css";
import { useWeather } from "../../context/useWeather";
import { weatherService } from "../../services/weather";
const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const { city, units, setForecast } = useWeather();
  const [coordinates, setCoordinates] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await weatherService.getWeather(city, units);
        setWeather(response);
        const { lon, lat } = response?.coord;
        setCoordinates({ lon, lat });
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchWeather();
  }, [city, units]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const { lon, lat } = coordinates;
        const response = await weatherService.getForeCast(lat, lon, units);
        setForecast(response.list);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchForecast();
  }, [coordinates, units]);

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
        <h3>
          {Math.round(temperature)}
          {units == "metric" ? "°C" : "°F"}
        </h3>
      </div>
      <p>
        Feels like {Math.round(feelsLike)}
        {units == "metric" ? "°C" : "°F"}. {weatherDetails[0].description}.
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
