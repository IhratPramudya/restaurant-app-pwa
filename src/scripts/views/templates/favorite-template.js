/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multiple-empty-lines */

class Favorite extends HTMLElement {
  // constructor() {
  //   super();
  //   this.attachShadow({ mode: 'open' });
  // }

  set restaurantFavorite(value) {
    this._restaurantFavorite = value;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="mycontent" class="content_resto">
    <div class="resto_explor">
      <h2 class="title_explor">Your Favorite Resto <i class="fa fa-cutlery" aria-hidden="true"></i></h2>
    </div>

    <div class="list_resto">
        <div class="list_item_resto" id="resto_list_all_favorite">
          
        </div>
    </div>
</section>
        `;

    const listElementFavorite = this.querySelector('#resto_list_all_favorite');
    listElementFavorite.innerHTML = '';
    this._restaurantFavorite.forEach((favorite) => {
      listElementFavorite.innerHTML += `
            <div tabindex="0" class="restaurant">
            <figure>
                <div class="city">
                    <h4>${favorite.city}</h4>
                </div>
                <div class="detail-view">
                  <a href="#/detail/${favorite.id}">View Detail</a>
                </div>
                
                <img src="https://restaurant-api.dicoding.dev/images/medium/${favorite.pictureId}" alt="">
                <figcaption>
                    <p>Rating : ${favorite.rating}<span><i class="bi bi-star-fill"></i></span></p>
                    <h3 class="tagline_resto">${favorite.name}</h3>
                    <p>${favorite.description.slice(1, 200)}</p>
                </figcaption>
            </figure>
          </div>
            `;
    });
  }
}

customElements.define('favorite-content', Favorite);

