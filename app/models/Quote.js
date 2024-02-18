export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author

    }

    get InfoCardHTMLTemplate() {
        return `   
        <div class="info-card">
        <h1 class="magic-time">${this.content}</h1>
      
        <div class="hidden-details"> <h2>${this.author}</h2></div>
      </div>
        `
    }
}

