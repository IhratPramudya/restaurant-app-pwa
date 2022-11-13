/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable space-before-blocks */
// /* eslint-disable no-unused-vars */
// import FavoriteResto from '../data/favorite-resto-idb';
import { templateButtonLike, templateButtonLiked } from '../views/templates/template-button-like';

const likeButtonInit = {
  async init({ buttonContainer, favoriteResto, restaurant }){
    this._buttonContainer = buttonContainer;
    this._favoriteResto = favoriteResto;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton(){
    const { id } = this._restaurant;
    if (await this._isRestoExist(id)){
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await this._favoriteResto.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._buttonContainer.innerHTML = templateButtonLike();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._buttonContainer.innerHTML = templateButtonLiked();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._restaurant.id);
      // eslint-disable-next-line no-underscore-dangle
      this._renderButton();
    });
  },
};

export default likeButtonInit;
