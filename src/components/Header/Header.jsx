import React from "react";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles["header-container"]}>
      <h1 className={styles["title"]}>OpenWeather</h1>
      <h1 className={styles["sub-title"]}>
        Weather forecasts, nowcasts and history in a fast and elegant way
      </h1>
    </div>
  );
}
