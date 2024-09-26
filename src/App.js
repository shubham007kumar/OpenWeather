import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import WeatherWidget from "./components/Widget/WeatherWidget";
import { useState } from "react";
import { WeatherProvider } from "./context/Weather";
import Forecast from "./components/Forecast/Forecast";

function App() {
  console.log("App render");
  return (
    <WeatherProvider>
      <Header />
      <SubHeader />
      <div className="weather-container">
        <WeatherWidget />
        <Forecast />
      </div>
    </WeatherProvider>
  );
}

export default App;
