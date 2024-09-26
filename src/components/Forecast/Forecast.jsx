import React from "react";
import ForecastItem from "./ForecastItem"; // Assuming ForecastItem is in the same folder
import { useWeather } from "../../context/useWeather";
import styles from "./Forecast.module.css";

const Forecast = () => {
  const { forecast } = useWeather();
  return (
    <div className={styles["forecast-container"]}>
      <h2>8-day forecast</h2>
      {forecast.map((item, index) => (
        <ForecastItem
          key={index}
          date={item.dt}
          temperature={item.temp}
          weather={item.weather[0]}
        />
      ))}
    </div>
  );
};

export default Forecast;
