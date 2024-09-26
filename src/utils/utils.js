export function unixTimestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = { weekday: "short", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getTimeOfDay() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 5 && hours < 12) {
    return "morn";
  } else if (hours >= 12 && hours < 17) {
    return "day";
  } else if (hours >= 17 && hours < 21) {
    return "eve";
  } else {
    return "night";
  }
}
