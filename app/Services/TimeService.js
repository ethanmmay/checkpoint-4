import { ProxyState } from "../AppState.js";

class TimeService {
    getTime() {
        setInterval(this.setTime, 1000)
    }

    setTime() {
        let date = new Date()
        ProxyState.time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        if (date.getHours() > 16) {
            ProxyState.greeting = "Good Evening, "
        } else if (date.getHours() > 11) {
            ProxyState.greeting = "Good Afternoon, "
        } else {
            ProxyState.greeting = "Good Morning, "
        }
    }
}

export const timeService = new TimeService();

