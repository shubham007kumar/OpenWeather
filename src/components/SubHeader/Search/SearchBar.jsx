import React from "react";
import styles from "./SearchBar.module.css";
import { useWeather } from "../../../context/useWeather";
export default function SearchBar() {
  const [searchText, setSearchText] = React.useState("Gaya");
  const { setCity } = useWeather();
  const handleSearch = () => {
    setCity(searchText);
  };
  return (
    <div className={styles["search-container"]}>
      <input
        value={searchText}
        className={styles["search-bar"]}
        type="text"
        placeholder="Search for a city"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch} className={styles["search-button"]}>
        Search
      </button>
    </div>
  );
}
