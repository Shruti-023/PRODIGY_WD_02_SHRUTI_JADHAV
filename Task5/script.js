const apiKey = "0b27f7727046f3566ca1837cd84c8164"; // replace with your OpenWeatherMap API key

document.getElementById("getBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById("weatherResult").innerHTML = `<p id="error">City not found! 😢</p>`;
        return;
      }

      document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
      document.getElementById("condition").innerText = `🌤 Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").innerText = `🌬 Wind: ${data.wind.speed} m/s`;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p id="error">Error fetching data!</p>`;
    });
}
