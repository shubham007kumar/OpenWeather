import React, { useState } from "react";
import styles from "./DateFilter.module.css";
import { useWeather } from "../../../context/useWeather";

const DateFilter = () => {
  const [date, setDate] = useState(new Date());
  const { setSelectedDate } = useWeather();
  const today = new Date().toISOString().split("T")[0];

  const handleFilter = () => {
    if (date) {
      setSelectedDate(date);
    } else {
      console.log("Please select a date");
    }
  };

  console.log("date filter render");
  return (
    <div className={styles["date-filter-container"]}>
      <input
        className={styles["date-input"]}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        max={today}
      />

      <button className={styles["filter-button"]} onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
};

export default React.memo(DateFilter);
