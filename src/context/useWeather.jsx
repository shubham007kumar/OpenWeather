import { useContext } from "react";
import { WeatherContext } from "./Weather";

export function useWeather() {
  const weatherContext = useContext(WeatherContext);
  if (!weatherContext) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return weatherContext;
}
