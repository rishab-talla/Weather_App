const apiKey = "2e72af7f82b6f510a183e8c0061c3d36";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputCity = document.querySelector(".search-input");
const searchbtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");
const InvalidMsg = document.querySelector(".invalid");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".invalid").innerHTML = "Enter a valid location";
    document.querySelector(".invalid").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "images/smoke.jpg";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
    }

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".invalid").style.display = "none";
  }
}

inputCity.addEventListener("keydown", (event) => {
  if (inputCity.value === "" && event.key === "Enter") {
    document.querySelector(".invalid").innerHTML = "Enter a location";
    document.querySelector(".invalid").style.display = "block";
  } else if (inputCity.value !== "" && event.key === "Enter") {
    checkWeather(inputCity.value);
    inputCity.value = "";
  }
});

searchbtn.addEventListener("click", () => {
  if (inputCity.value === "") {
    document.querySelector(".invalid").innerHTML = "Enter a location";
    document.querySelector(".invalid").style.display = "block";
  } else {
    checkWeather(inputCity.value);
    inputCity.value = "";
  }
});


/*
const heading = document.querySelector(".heading");
const refreshBtn = document.querySelector(".refresh-btn");
const nextBtn = document.querySelector(".next-btn");
const searchBtn = document.querySelector(".search-btn");


*/