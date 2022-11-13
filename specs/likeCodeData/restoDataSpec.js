/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import likeButtonInit from '../../src/scripts/utils/like-button-initiator';
import FavoriteResto from '../../src/scripts/data/favorite-resto-idb';

const createTemplateDataInitial = async (restaurant) => {
  await likeButtonInit.init({
    buttonContainer: document.querySelector('#likeButtonElementContainer'),
    favoriteResto: FavoriteResto,
    restaurant,
  });
};

export { createTemplateDataInitial };
