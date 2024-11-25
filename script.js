const API_KEY = "ac4703d8a7f14989b79164444242011";

async function fetchWeather() {
    const location = document.getElementById("location").value;
    const weatherInfoDiv = document.getElementById("weather-info");
    
    if (!location) {
        alert("Please enter a location!");
        alert("Then you will contiune.....")
        return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Unable to fetch weather data.");
        }
        
        const data = await response.json();
        displayWeather(data);
        weatherInfoDiv.style.display = "block";
    } catch (error) {
        alert("Error: " + error.message);
        weatherInfoDiv.style.display = "none";
    }
}

function displayWeather(data) {
    document.getElementById("location-name").innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temperature").innerText = data.current.temp_c;
    document.getElementById("condition").innerText = data.current.condition.text;
    document.getElementById("humidity").innerText = data.current.humidity;

    updateBackground(data.current.condition.text);
}

function updateBackground(condition) {
    const body = document.body;


    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
}
