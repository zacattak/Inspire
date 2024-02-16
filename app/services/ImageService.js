import { api } from "./AxiosService.js"

class ImageService {
    async getImage() {
        const response = await api.get('api/images')
        console.log('got image', response.data)
    }
}

export const imageService = new ImageService()