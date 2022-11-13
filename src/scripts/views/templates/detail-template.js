/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multiple-empty-lines */

class Detail extends HTMLElement {
  set restaurantDetail(DetailResto) {
    this._restaurantDetail = DetailResto;
    this.render();
  }

  get restaurantButton() {
    return this.querySelector('#likeButtonContainer');
  }


  render() {
    this.innerHTML = `
      
        <div tabindex="0" class="restaurant_detail">
        
            <div class="city">
                <h4>${this._restaurantDetail.city}</h4>
            </div>
            <div tabindex="0" class="city" id="likeButtonContainer">
          
            </div>
          <figure>
            <img src="https://restaurant-api.dicoding.dev/images/medium/${this._restaurantDetail.pictureId}" alt="">
            <figcaption>
                <p>Rating : ${this._restaurantDetail.rating}<span><i class="bi bi-star-fill"></i></span></p>
                <h3 class="tagline_resto">${this._restaurantDetail.name}</h3>
                <p>${this._restaurantDetail.description}</p>
                            <address>
            ${this._restaurantDetail.address}<br />
            ${this._restaurantDetail.city}
            </address>
            </figcaption>
        </figure>
        <h3 class="menu_title">Menu <i class="bi bi-menu-app"></i></h3>
        <hr>
       <div class="constnetAllmenu">
            <div class="menu_foods">
            <h3 class="foods_title">Foods</h3>
            
          <table id="foods_list">
        
          </table>
        </div>
        <hr>
        <div class="menu_drinks">
            <h3 class="drinks_title">drinks</h3>
            <table id="drinks_list">
        
          </table>
        </div>
       </div>
        <hr>
        <h3 class="menu_title">Review Atau Testimoni</h3>
  
        <div class="content_review" id="list_review">
          
        </div>
        
      </div> 
        

        `;

    const foodsResto = this.querySelector('#foods_list');
    foodsResto.innerHTML = '';
    this._restaurantDetail.menus.foods.forEach((food) => {
      foodsResto.innerHTML += `
                <tr>
                  <td>${food.name} <i class="bi bi-egg-fried"></i></td>
                </tr>
            `;
    });

    const drinksResto = this.querySelector('#drinks_list');
    drinksResto.innerHTML = '';
    this._restaurantDetail.menus.drinks.forEach((drink) => {
      drinksResto.innerHTML += `
                <tr>
                  <td>${drink.name} <i class="bi bi-egg-fried"></i></td>
                </tr>
            `;
    });

    const contentReview = this.querySelector('#list_review');
    contentReview.innerHTML = '';
    this._restaurantDetail.customerReviews.forEach((review) => {
      contentReview.innerHTML += `
  <div class="review_content_list">
    <div class="tag_name">
      <h3><i class="bi bi-yelp"></i> ${review.name}</h3>
    </div>
    <hr>
    <div class="review">
      <p><i class="bi bi-yelp"></i> ${review.review}</p>
      <p>Date Write : ${review.date}</p>
    </div>
  </div>
            `;
    });
  }
}

customElements.define('detail-content', Detail);
