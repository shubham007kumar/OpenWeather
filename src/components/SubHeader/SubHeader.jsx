import React from "react";
import styles from "./SubHeader.module.css";
import SearchBar from "./Search/SearchBar";
import TemperatureTab from "./TemperatureTab/TemperatureTab";
import DateFilter from "./Filter/DateFilter";
export default function SubHeader() {
  return (
    <div className={styles["subHeader-container"]}>
      <SearchBar />
      <div className={styles["filter-container"]}>
        <DateFilter />
        <TemperatureTab />
      </div>
    </div>
  );
}
