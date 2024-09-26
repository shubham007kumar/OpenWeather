export const weatherService = {
  getWeather,
  getWeatherhistory,
  getForeCast,
};

function getWeather(city, units) {
  return fetch(`http://localhost:8080/weather?q=${city}&units=${units}`).then(
    (res) => res.json()
  );
}

function getForeCast(lat, lon,units) {
  return fetch(
    `http://localhost:8080/forecast?lat=${lat}&lon=${lon}&units=${units}`
  ).then((res) => res.json());
}

function getWeatherhistory(lat, lon, timestamp, units) {
  return fetch(
    `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&units=${units}&dt=${timestamp}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  ).then((res) => res.json());
}
