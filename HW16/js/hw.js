let feels = document.querySelector('.feels');
let city = document.querySelector('.city');
let weather = document.querySelector('.weather');
let icon = document.querySelector('.icon');
let date = document.querySelector('.date');
let temp = document.querySelector('.temp');
let refresh = document.querySelector('.refresh');

let loadWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.2600&lon=28.6697&units=metric&appid=2beaa0042bc047c0bcb6f1f9a3e98702\n')
        .then(response => response.json())
        .then(data => {
            city.innerText = data.name;

            const now = new Date(data.dt * 1000);
            date.innerText = `${now.toDateString()} ${now.toLocaleTimeString()}`;

            temp.innerText = `${data.main.temp}°C`;
            feels.innerText = `Feels like ${data.main.feels_like}°C`;

            weather.innerHTML = `
                Wind: ${data.wind.speed} m/s<br>
                Humidity: ${data.main.humidity}%<br>
                Pressure: ${data.main.pressure} hPa<br>
                Clouds: ${data.clouds.all}%<br>
            `;

            const iconCode = data.weather[0].icon;
            icon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

loadWeather();


refresh.addEventListener('click', loadWeather);