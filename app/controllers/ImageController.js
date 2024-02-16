import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";



export class ImageController {
    constructor() {
        console.log('image loaded')
        AppState.on('account', this.getImage)
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    setActiveImage(imageQuery) {
        imageService.setActiveImage(imageQuery)
    }
}