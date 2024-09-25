import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import SubHeader from "./components/SubHeader/SubHeader";
import WeatherWidget from "./components/Widget/WeatherWidget";
import { useState } from "react";
import { WeatherProvider } from "./context/Weather";

function App() {
  console.log("App render");
  return (
    <WeatherProvider>
      <Header />
      <SubHeader />
      <WeatherWidget />
    </WeatherProvider>
  );
}

export default App;
