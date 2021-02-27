import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


//Private
function _drawImage() {
    document.getElementById('bg-img').style.backgroundImage = `url(${ProxyState.images.image})`
    document.getElementById('fullImage').innerHTML = `<a style="cursor: pointer;" onclick="location.href = \'${ProxyState.images.image_large}\'">Full Image</a>`
}

//Public
export default class ImageController {
  constructor() {
    ProxyState.on("images", _drawImage);
    this.getImage()
  }

  getImage() {
    imageService.getImage()
  }

}
