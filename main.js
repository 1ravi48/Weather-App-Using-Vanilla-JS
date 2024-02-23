const currentDate = new Date().toDateString();
console.log(currentDate);

let dateHTML = document.getElementById("currentDate");
dateHTML.textContent = currentDate;


let temperatureHTML = document.getElementById("current-temperature");
let weatherTypeHTML = document.getElementById("weather-type"); 
let windSpeedHTML = document.getElementById("wind-speed"); 
let sunriseHTML = document.getElementById("sunrise");
let sunsetHTML = document.getElementById("sunset"); 

let weatherImage = document.getElementById("weather-image");


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
let sunriseTime = sunriseJava.slice(12, 17)

let sunsetJava = weatherObject.daily.sunset[0];
console.log(sunsetJava);
let sunsetTime = sunsetJava.slice(12, 17)

let weatherTypeString = ""

if (weatherTypeJava === 0) {
    weatherTypeString="Clear sky"
    weatherImage.setAttribute("src", "icons/sun_1163662.png")
}
else if (0<weatherTypeJava<4){
    weatherTypeString="Overcast"
    weatherImage.setAttribute("src", "icons/cloudy_1163661.png")
}
else if (weatherTypeJava===45 || weatherTypeJava===48){
    weatherTypeString="Fog"
    weatherImage.setAttribute("src", "icons/foog_1163640.png")
}
else if (50<weatherTypeJava<58 || 79<weatherTypeJava<83){
    weatherTypeString="Rain"
    weatherImage.setAttribute("src", "icons/rainy_1163627.png")

}
else if (70<weatherTypeJava<78 || 84<weatherTypeJava<87){
    weatherTypeString="Snow"
    weatherImage.setAttribute("src", "icons/snowy_1163629.png")
}
else if (94<weatherTypeJava<100){
    weatherTypeString="Thunderstorms"
    weatherImage.setAttribute("src", "icons/storm_1163636.png")
}

temperatureHTML.textContent = temperatureJava + "°C";
weatherTypeHTML.textContent = weatherTypeString; 
windSpeedHTML.textContent = "Wind speed: " + windSpeedJava + "km/h"; 
sunriseHTML.textContent = "Sunrise: " + sunriseTime + "am"; 
sunsetHTML.textContent = "Sunset: " + sunsetTime +  "pm";

}  

    fetchWeather(); 

