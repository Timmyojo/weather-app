import getWeather from "./fetchData";

const cityError = document.querySelector(".search-error");

async function renderWeather(cityName) {
  const temperature = document.querySelector(".temperature");
  const humidity = document.querySelector(".humidity span");
  const city = document.querySelector(".city");

  const weatherData = await getWeather(cityName);

  if (weatherData.message === "city not found") {
    cityError.textContent = weatherData.message;
    temperature.innerHTML = "";
    humidity.textContent = "";
    city.textContent = "";
  } else {
    temperature.innerHTML = `<img src='http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png'>${(weatherData.main.temp - 273.15).toFixed(1)} <sup>o</sup><span>C</span>`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    city.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  }
}

export default renderWeather;
export { cityError };
