export class Quote {
    constructor(data) {
        this.quote = data.quote
        this.author = data.author

    }

    get InfoCardHTMLTemplate() {
        return `   
        <div class="info-card">
        <h1 class="magic-time">${this.quote}</h1>
      
        <div class="hidden-details"> <h2>${this.author}</h2></div>
      </div>
        `
    }
}