import React from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [city, setCity] = React.useState("Gaya");
  const handleSearch = () => {
    if (onSearch) {
      onSearch(city);
    }
  };
  console.log("search render");
  return (
    <div className={styles["search-container"]}>
      <input
        value={city}
        className={styles["search-bar"]}
        type="text"
        placeholder="Search for a city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch} className={styles["search-button"]}>
        Search
      </button>
    </div>
  );
}
