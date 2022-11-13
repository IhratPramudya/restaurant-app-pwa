/* eslint-disable import/no-cycle */
/* eslint-disable no-multiple-empty-lines */
import RestaurantDbSource from '../../data/data-api-restaurant';
import '../templates/home-template';


const HomeRestaurant = {
  async render() {
    return `
        <home-content></home-content>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantDbSource.restauranList();
    const homeContent = document.querySelector('home-content');
    homeContent.restaurantData = restaurant;
    // initGet.init({
    //   listContent: homeContent.elementContent,
    // });
  },

};

export default HomeRestaurant;
