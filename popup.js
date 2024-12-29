document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "d43e4868b330b51b8cb9f1c7e3aa0c2e"; // Replace with your OpenWeatherMap API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        document.getElementById("cityName").textContent = `City: ${data.name}`;
        document.getElementById(
          "temperature"
        ).textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById(
          "description"
        ).textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById(
          "humidity"
        ).textContent = `Humidity: ${data.main.humidity}%`;
      } else {
        alert("City not found");
      }
    })
    .catch((error) => {
      alert("Error fetching weather data");
    });
}
