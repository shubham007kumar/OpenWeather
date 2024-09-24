import React, { useState } from "react";
import styles from "./DateFilter.module.css";

export default function DateFilter() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const today = new Date().toISOString().split("T")[0];

  const handleFilter = () => {
    if (selectedDate) {
      console.log(`Filtering data for ${selectedDate}`);
      // Add filter logic here, like an API call or data processing
    } else {
      console.log("Please select a date");
    }
  };
  return (
    <div className={styles["date-filter-container"]}>
      <input
        className={styles["date-input"]}
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        max={today}
      />

      <button className={styles["filter-button"]} onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
}
