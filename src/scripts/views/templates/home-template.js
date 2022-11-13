/* eslint-disable import/newline-after-import */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
class Home extends HTMLElement {
  set restaurantData(valueResto) {
    this._restaurantData = valueResto;
    this.render();
  }

  get elementContent() {
    return this.querySelector('figure');
  }

  render() {
    this.innerHTML = `
      <section id="mycontent" class="content_resto">
          <div class="resto_explor">
            <h2 class="title_explor">Explore SanSacofResto <i class="fa fa-cutlery" aria-hidden="true"></i></h2>
          </div>

          <div class="list_resto">
              <div class="list_item_resto">
                
              </div>
          </div>
      </section>
        `;

    const contentResto = this.querySelector('.list_item_resto');
    contentResto.innerHTML = '';
    this._restaurantData.forEach((resto) => {
      contentResto.innerHTML += `
            <div tabindex="0" class="restaurant">
                <div class="city">
                    <h4>${resto.city}</h4>
                </div>
                <div class="detail-view">
                  <a id="viewButton" href="#/detail/${resto.id}">View Detail</a>
                </div>
            <figure>
                <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}" alt="">
                <figcaption>
                    <p>Rating : ${resto.rating}<span><i class="bi bi-star-fill"></i></span></p>
                    <h3 class="tagline_resto">${resto.name}</h3>
                    <p>${resto.description.slice(30, 100)}</p>
                </figcaption>
            </figure>
          </div>
            `;
    });
  }
}

customElements.define('home-content', Home);
