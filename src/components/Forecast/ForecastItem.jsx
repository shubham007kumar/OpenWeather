import { useWeather } from "../../context/useWeather";
import { getTimeOfDay, unixTimestampToDate } from "../../utils/utils";
import styles from "./Forecast.module.css";

const ForecastItem = ({ date, temperature, weather }) => {
  const { units } = useWeather();
  const x = getTimeOfDay();
  const temp = temperature[x];
  const weatherIconCode = weather.icon;
  const weatherDescription = weather.description;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
  return (
    <div className={styles["forecast-row"]}>
      <div className={styles["forecast-time"]}>
        <p>{unixTimestampToDate(date)}</p>
      </div>
      <div className={styles["forecast-temp"]}>
        <img
          className={styles["forecast-icon"]}
          src={iconUrl}
          alt={weatherDescription}
        />
        <p>
          {Math.round(temp)}
          {units == "metric" ? "°C" : "°F"}
        </p>
      </div>
      <div className={styles["forecast-desc"]}>
        <p>{weatherDescription}</p>
      </div>
    </div>
  );
};

export default ForecastItem;
