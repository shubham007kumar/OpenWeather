export const weatherService = {
  getWeather,
  getWeatherhistory,
};

function getWeather(city, units) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${units}`
  ).then((res) => res.json());
}

function getWeatherhistory(lat, lon, timestamp, units) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&units=${units}&dt=${timestamp}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  ).then((res) => res.json());
}
