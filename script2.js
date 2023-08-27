// const searchInput = document.getElementById("place-input");
// const searchButton = document.getElementById("searchBtn");
// const imageContainer = document.getElementsByClassName("container");

const apiKey = '06af4358de6af85f0a068d9908594c58';
// const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('place-input');
const weatherIconElement = document.querySelector('.container');
// const locationElement = document.querySelector('.location');
// const conditionElement = document.querySelector('.condition');

searchButton.addEventListener('click', fetchWeather);

async function fetchWeather() {
    const cityName = cityInput.value;
    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    locationElement.textContent = `${data.name}, ${data.sys.country}`;
    conditionElement.textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    const iconClass = getWeatherIconClass(iconCode);
    weatherIconElement.className = `weather-icon fas ${iconClass}`;
}

function getWeatherIconClass(iconCode) {
    switch (iconCode) {
        case '01d':
            return 'fa-sun';
        case '01n':
            return 'fa-moon';
        case '02d':
        case '02n':
            return 'fa-cloud-sun';
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return 'fa-cloud';
        case '09d':
        case '09n':
            return 'fa-cloud-showers-heavy';
        case '10d':
        case '10n':
            return 'fa-cloud-rain';
        case '11d':
        case '11n':
            return 'fa-bolt';
        case '13d':
        case '13n':
            return 'fa-snowflake';
        case '50d':
        case '50n':
            return 'fa-smog';
        default:
            return 'fa-question-circle';
    }
}

