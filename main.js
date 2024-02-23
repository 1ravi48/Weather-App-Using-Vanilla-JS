const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=54.072&longitude=-2.2885&current=temperature_2m,weather_code,wind_speed_10m&daily=sunrise,sunset&timezone=GMT&forecast_days=1"

async function fetchWeather() {
    const response = await fetch (weatherUrl)
    
        if (!response.ok) {
            console.error(response.status);
            console.error(await response.text());
            return
        }
    
    const data = await response.json();
    
    console.log (data)

    }

fetchWeather();