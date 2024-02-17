import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { api } from "./AxiosService.js"

class ImageService {
    async getImage() {
        const response = await api.get('api/images')
        console.log('got image', response.data)
        const newImage = new Image(response.data)
        console.log('new image', newImage);
        AppState.image = newImage
    }

    setActiveImage(imageQuery) {
        const activeImage = AppState.image.find(image => image.query == imageQuery)
        AppState.image = activeImage
    }
}

export const imageService = new ImageService()