import React, { useState } from "react";
import styles from "./TemperatureTab.module.css";
import { useWeather } from "../../../context/useWeather";

export default function TemperatureTab() {
  const [activeTab, setActiveTab] = useState("metric");
  const { setUnits } = useWeather();
  const handleChange = (tab) => {
    setActiveTab(tab);
    setUnits(tab);
  };
  console.log("temperature tab render");
  console.log(activeTab);
  return (
    <div className={styles["tab-container"]}>
      <button
        className={`${styles.tabButton} ${
          activeTab === "metric" ? styles.active : ""
        }`}
        onClick={() => handleChange("metric")}
      >
        Metric: °C, m/s
      </button>
      <button
        className={`${styles.tabButton} ${
          activeTab === "imperial" ? styles.active : ""
        }`}
        onClick={() => handleChange("imperial")}
      >
        Imperial: °F, mph
      </button>
    </div>
  );
}
