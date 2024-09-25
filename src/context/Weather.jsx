import { createContext, useMemo, useState } from "react";

export const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Gaya");
  const [selectedDate, setSelectedDate] = useState(null);
  const [units, setUnits] = useState("metric");
  const contextValue = useMemo(
    () => ({
      city,
      setCity,
      selectedDate,
      setSelectedDate,
      units,
      setUnits,
    }),
    [city, selectedDate, units]
  );
  console.log(contextValue);
  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
