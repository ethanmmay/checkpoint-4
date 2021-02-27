import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";

class ImageService {
    async getImage() {
        try {
            const res = await api.get('images')
            ProxyState.images = {image: res.data.url, image_large: res.data.large_url}
        } catch (error) {
            console.error(error);
        }
    }
}

export const imageService = new ImageService();

