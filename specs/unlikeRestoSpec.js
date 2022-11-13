/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import FavoriteResto from '../src/scripts/data/favorite-resto-idb';
import * as factoriesDataLike from './likeCodeData/restoDataSpec';

/* eslint-disable no-undef */
describe('user unlike resto', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="likeButtonElementContainer"></div>';
    await FavoriteResto.putResto({ id: 132 });
  });

  afterEach(async () => {
    await FavoriteResto.deleteResto(132);
  });

  it('should show the unlike button if you dont like it yet', async () => {
    await factoriesDataLike.createTemplateDataInitial({ id: 132 });

    expect(document.querySelector('[aria-label="unlike resto"]'))
      .toBeTruthy();
  });

  it('should show dislike button if like button', async () => {
    await factoriesDataLike.createTemplateDataInitial({ id: 132 });

    expect(document.querySelector('[aria-label="like resto"]'))
      .toBeFalsy;
  });

  it('it should be if you press the unlike restaurant button it will be removed from the data list', async () => {    
    await factoriesDataLike.createTemplateDataInitial({ id: 132 });

    document.querySelector('[aria-label="unlike resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked movie is not in the list', async () => {
    await factoriesDataLike.createTemplateDataInitial({ id: 132 });
    FavoriteResto.deleteResto(132);

    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});
