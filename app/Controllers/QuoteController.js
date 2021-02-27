import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";


//Private
function _drawQuote() {
    document.getElementById('quote').innerHTML = `<p>${ProxyState.quote.content} - ${ProxyState.quote.author}</p>`
}

//Public
export default class QuoteController {
  constructor() {
    ProxyState.on("quote", _drawQuote);
    this.getQuote()
  }

  getQuote() {
    quoteService.getQuote()
  }

}
