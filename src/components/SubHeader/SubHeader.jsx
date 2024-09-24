import React from "react";
import styles from "./SubHeader.module.css";
import SearchBar from "./Search/SearchBar";
import TemperatureTab from "./TemperatureTab/TemperatureTab";
import DateFilter from "./Filter/DateFilter";
export default function SubHeader({onCityChange}) {
  console.log('subheader render');
  return (
    <div className={styles["subHeader-container"]}>
      <SearchBar onSearch={onCityChange} />
      <div className={styles["filter-container"]}>
        <DateFilter />
        <TemperatureTab />
      </div>
    </div>
  );
}
