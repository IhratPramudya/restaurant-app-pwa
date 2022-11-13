/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import FavoriteResto from '../../data/favorite-resto-idb';
// eslint-disable-next-line import/no-unresolved
import '../templates/favorite-template';
import searchInitiatorPresenter from '../../utils/search-restaurant-presenter';

const Like = {
  async render() {
    return `
        <favorite-content></favorite-content>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteResto.getAllResto();
    const restaurantExportData = document.querySelector('favorite-content');

    restaurantExportData.restaurantFavorite = restaurant;


    // searchInitiatorPresenter.init({
    //   button: restaurantExportData.buttonSearchResto,
    //   inputValue: restaurantExportData.valueRestoSearch,
    // });
  },
};

export default Like;

