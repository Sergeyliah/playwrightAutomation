async function getWeather() {
  const apiKey = '207a6a253989948649dca9d7677162ea'; // Replace with your actual API key
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weather = `
      <h2>Weather in ${data.name}</h2>
      <p><strong>${data.weather[0].main}</strong>: ${data.weather[0].description}</p>
      <p>Temperature: ${data.main.temp} °C</p>
    `;
    document.getElementById('weather').innerHTML = weather;
  } catch (error) {
    document.getElementById('weather').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

// Retrieve and parse the user object from localStorage
const user = JSON.parse(localStorage.getItem("user"));

// Show welcome message if user exists
if (user && user.username) {
    document.getElementById("user-name").textContent = `${user.username}`;
} else {
    document.getElementById("user-name").textContent = "guest";
}
