async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8f15ba8d826885185e5176df7e6d9ac`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();

  return data;
}

export default getWeather;
