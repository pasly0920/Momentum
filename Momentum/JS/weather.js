const API_KEY = "2cbdf7a153b8e91407bcd7f4a67f91de";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = `@${data.name}`;
        const weather = data.weather[0].main;
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = city;
        weatherContainer.innerText = `${weather} \n ${Math.round(data.main.temp)}°C \n ${data.main.humidity}%`;
    });
    //js call url
}
function onGeoError(){
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);