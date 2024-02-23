const currentDate = new Date().toDateString();
console.log(currentDate);

let dateHTML = document.getElementsByClassName("currentDate");


let temperatureHTML = document.getElementsByClassName("current-temperature");
let weatherTypeHTML = document.getElementsByClassName("weather-type"); 
let windSpeedHTML = document.getElementsByClassName("wind-speed"); 
let sunriseHTML = document.getElementsByClassName("sunrise");
let sunsetHTML = document.getElementsByClassName("sunset"); 


const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=54.072&longitude=-2.2885&current=temperature_2m,weather_code,wind_speed_10m&daily=sunrise,sunset&timezone=GMT&forecast_days=1"

async function fetchWeather() {
    const response = await fetch (weatherUrl)
        if (!response.ok) {
            console.error(response.status);
            console.error(await response.text());
            return
        }
   
let weatherObject = await response.json(); 

console.log(weatherObject); 

let temperatureJava = Math.round(weatherObject.current.temperature_2m); 
console.log(temperatureJava);

let weatherTypeJava = weatherObject.current.weather_code; 
console.log(weatherTypeJava);

let windSpeedJava = Math.round(weatherObject.current.wind_speed_10m);
console.log(windSpeedJava);

let sunriseJava = weatherObject.daily.sunrise[0];
console.log(sunriseJava);

let sunsetJava = weatherObject.daily.sunset[0];
console.log(sunsetJava);



}  

    fetchWeather(); 

let temperatureHTML = document.getElementsByClassName("current-temperature");
let weatherTypeHTML = document.getElementsByClassName("weather-type"); 
let windSpeedHTML = document.getElementsByClassName("wind-speed"); 
let sunriseHTML = document.getElementsByClassName("sunrise");
let sunsetHTML = document.getElementsByClassName("sunset"); 