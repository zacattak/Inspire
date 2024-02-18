export class Image {
    constructor(data) {
        this.query = data.query
        this.author = data.author
        this.largeImgUrl = data.largeImgUrl
        this.quote = data.quote

    }

    get InfoCardHTMLTemplate() {
        return `   
        <div class="info-card">
        <h1>${this.quote}</h1>
        <h2 class="magic-time">time placeholder</h2>
        <div class="hidden-details"> <h2>${this.author}</h2></div>
      </div>
        `
    }
}


// url: String, 
// imgUrl: String, 
// query: String, 
// author: String, 
// largeImgUrl: String, 
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)