/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable lines-between-class-members */
/* eslint-disable space-before-blocks */
import DATA_API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantDbSource {
  static async restauranList(){
    const response = await fetch(DATA_API_ENDPOINT.LIST_RESTAURANT);

    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailRestaurant(id){
    const response = await fetch(DATA_API_ENDPOINT.DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  // static async searchResto(query) {
  //   const response = await fetch(DATA_API_ENDPOINT.SEARCH_RESTAURANT(query));
  // }
  // static async insertReview(review) {
  //   const options = {
  //     method: 'POST',
  //     header: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(review),
  //   };

  //   const response = await fetch(`${CONFIG.BASE_URL}review`, options);
  //   return response;
  // }
}

export default RestaurantDbSource;
