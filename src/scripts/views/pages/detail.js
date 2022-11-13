/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/data-api-restaurant';
import likeButtonInit from '../../utils/like-button-initiator';
import '../templates/detail-template';
import FavoriteResto from '../../data/favorite-resto-idb';


const DetailRestaurant = {
  async render() {
    return `
      <section id="mycontent" class="content_resto">
          <div class="resto_explor">
            <h2 class="title_explor">Detail View SanSacofResto <i class="fa fa-cutlery" aria-hidden="true"></i></h2>
          </div>

          <div class="list_resto">
              <div class="list_item_resto">
                
              </div>
          </div>
      </section>
        <detail-content>
        
        </detail-content>

        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContent = document.querySelector('detail-content');
    detailContent.restaurantDetail = restaurant;
    likeButtonInit.init({
      buttonContainer: detailContent.restaurantButton,
      favoriteResto: FavoriteResto,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
      // eslint-disable-next-line comma-dangle
      }
    });

  },
};

export default DetailRestaurant;

