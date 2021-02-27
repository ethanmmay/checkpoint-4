import { ProxyState } from "../AppState.js";
import { timeService } from "../Services/TimeService.js";


//Private
function _drawTime() {
    document.getElementById('timer').innerText = ProxyState.time
    document.getElementById('greeting').innerText = ProxyState.greeting + "User"
}

//Public
export default class TimeController {
  constructor() {
    ProxyState.on("time", _drawTime)
    this.getTime()
  }

  getTime() {
    timeService.getTime()
  }

}
