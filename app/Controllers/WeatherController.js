import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _drawWeather() {
    document.getElementById('weather').innerHTML = `<div class="d-flex justify-content-end mt-3 mr-3 align-items-center"><img src="${ProxyState.weather.overcast === "Clouds" ? 'http://openweathermap.org/img/w/04d.png' : 'http://openweathermap.org/img/w/02d.png'}" alt="Weather Image" width="40px" height="40px"><h3 class="pl-2">${ProxyState.weather.temp}°F</h3></div>`
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("weather", _drawWeather);
    this.getWeather()
  }

  getWeather() {
    weatherService.getWeather()
  }

}
