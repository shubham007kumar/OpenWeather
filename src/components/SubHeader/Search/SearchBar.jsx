import React from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar() {
  return (
    <div className={styles["search-container"]}>
      <input
        className={styles["search-bar"]}
        type="text"
        placeholder="Search for a city"
      />
      <button className={styles["search-button"]} >Search</button>
    </div>
  );
}
