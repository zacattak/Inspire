export class Image {
    constructor(data) {
        this.query = data.query
        this.author = data.author
        this.largeImgUrl = data.largeImgUrl

    }
}


// url: String, 
// imgUrl: String, 
// query: String, 
// author: String, 
// largeImgUrl: String, 
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)