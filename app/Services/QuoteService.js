import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class QuoteService {
    async getQuote() {
        try {
            const res = await api.get('quotes')
            ProxyState.quote = {content: res.data.content, author: res.data.author}
        } catch (error) {
            console.error(error);
        }
    }
}

export const quoteService = new QuoteService();

