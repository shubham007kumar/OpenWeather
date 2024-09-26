import { createContext, useMemo, useState } from "react";

export const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Gaya");
  const [selectedDate, setSelectedDate] = useState(null);
  const [units, setUnits] = useState("metric");
  const [forecast, setForecast] = useState([]);
  const contextValue = useMemo(
    () => ({
      city,
      setCity,
      selectedDate,
      setSelectedDate,
      units,
      setUnits,
      forecast,
      setForecast,
    }),
    [city, selectedDate, units, forecast]
  );
  console.log(contextValue);
  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
