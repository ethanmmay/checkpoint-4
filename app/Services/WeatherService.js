import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class WeatherService {
    async getWeather() {
        try {
            const res = await api.get('weather')
            ProxyState.weather = {temp: this.KToF(res.data.main.temp), overcast: res.data.weather[0].main}
        } catch (error) {
            console.error(error);
        }
    }

    KToF(K) {
        let F = ((((K-273.15)*9)/5)+32).toFixed(1)
        return F
    }
}

export const weatherService = new WeatherService();

