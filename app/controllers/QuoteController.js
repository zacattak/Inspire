import { AppState } from "../AppState.js"
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuote() {
    const quote = AppState.quote

    let htmlString = ''
    // quote.forEach(quote => htmlString += quote.CardHTMLTemplate)
    setHTML('quoteInfo', quote.InfoCardHTMLTemplate)
}

export class QuoteController {
    constructor() {
        console.log('quote controller loaded');

        // AppState.on('quote', this.getRandomQuote)

        AppState.on('quote', _drawQuote)

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
    setActiveQuote(quoteAuthor) {
        quoteService.setActiveQuote(quoteAuthor)
    }
}