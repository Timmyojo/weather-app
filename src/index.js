import renderWeather, { cityError } from "./render";
import "./style.css";

const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");

const getInputValue = (e) => {
  e.preventDefault();
  if (input.value === "") {
    cityError.textContent = "City name cannot be empty.";
  } else {
    renderWeather(input.value);
    input.value = "";
    cityError.textContent = "";
  }
};

submitBtn.addEventListener("click", getInputValue);
