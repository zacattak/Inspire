import { api } from "./AxiosService.js"

class QuoteService {
    async getRandomQuote() {
        const response = await api.get('api/quotes')
        console.log('got quote', response.data)
    }
}

export const quoteService = new QuoteService()