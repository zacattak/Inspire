import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";

export class QuoteController {
    constructor() {
        console.log('quote controller loaded');
        this.getRandomQuote()
    }

    async getRandomQuote() {
        try {
            await quoteService.getRandomQuote()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}