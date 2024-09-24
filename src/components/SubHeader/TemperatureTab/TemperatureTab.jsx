import React, { useState } from "react";
import styles from "./TemperatureTab.module.css";

export default function TemperatureTab() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className={styles["tab-container"]}>
      <button
        className={`${styles.tabButton} ${
          activeTab === "tab1" ? styles.active : ""
        }`}
        onClick={() => setActiveTab("tab1")}
      >
        Metric: °C, m/s
      </button>
      <button
        className={`${styles.tabButton} ${
          activeTab === "tab2" ? styles.active : ""
        }`}
        onClick={() => setActiveTab("tab2")}
      >
        Imperial: °F, mph
      </button>
    </div>
  );
}
