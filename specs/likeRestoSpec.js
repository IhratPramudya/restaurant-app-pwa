/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import FavoriteResto from '../src/scripts/data/favorite-resto-idb';
import * as factoriesDataLike from './likeCodeData/restoDataSpec';

/* eslint-disable no-undef */
describe('user like resto', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="likeButtonElementContainer"></div>';
  });

  it('should show the like button if you dont like it yet', async () => {
    await factoriesDataLike.createTemplateDataInitial({ id: 1 });

    expect(document.querySelector('[aria-label="like resto"]'))
      .toBeTruthy();
  });

  it('should displays the dislike button if the button is liked', async () => {
    await factoriesDataLike.createTemplateDataInitial({ id: 1 });

    expect(document.querySelector('[aria-label="unlike resto"]'))
      .toBeFalsy;
  });

  it('should like the movie you like', async () => {
    document.body.innerHTML = '<div id="likeButtonElementContainer"></div>';
    
    await factoriesDataLike.createTemplateDataInitial({ id: 132 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteResto.getResto(132);
    expect(resto).toEqual({ id: 132 });

    FavoriteResto.deleteResto(132);
  });

  it('should not like the movie you like', async () => {
    document.body.innerHTML = '<div id="likeButtonElementContainer"></div>';
    
    await factoriesDataLike.createTemplateDataInitial({ id: 132 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteResto.getResto(132);
    expect(resto).toEqual({ id: 132 });

    FavoriteResto.deleteResto(132);
  });

  it('should not add the restaurant you like to your favorites if the restaurant is already liked', async () => {
    await factoriesDataLike.createTemplateDataInitial({ id: 132 });

    await FavoriteResto.putResto({ id: 132 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));  
    
    expect(await FavoriteResto.getAllResto()).toEqual([{ id: 132 }]);
    FavoriteResto.deleteResto(132);
  });

  it('should not add a restaurant if the id does not exist', async () => { 
    await factoriesDataLike.createTemplateDataInitial({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});
