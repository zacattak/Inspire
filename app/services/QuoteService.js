import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {
    async getRandomQuote() {
        const response = await api.get('api/quotes')
        console.log('got quote', response.data)

        const newQuote = new Quote(response.data)
        console.log('new quote', newQuote);
        AppState.quote = newQuote
    }

    setActiveQuote(quoteAuthor) {
        const activeQuote = AppState.quote.find(quote => quote.author == quoteAuthor)
        AppState.quote = activeQuote
    }
}

export const quoteService = new QuoteService()