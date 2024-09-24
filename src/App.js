import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import WeatherWidget from "./components/Widget/WeatherWidget";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Gaya");

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };
  console.log("App render");
  return (
    <div>
      <Header />
      <SubHeader onCityChange={handleCityChange} />
      <WeatherWidget city={city} />
    </div>
  );
}

export default App;
