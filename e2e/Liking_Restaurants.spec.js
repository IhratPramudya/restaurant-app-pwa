/* eslint-disable space-before-blocks */
/* eslint-disable import/newline-after-import */
/* eslint-disable indent */
/* eslint-disable no-undef */

Feature('Liking Restaurants');

Scenario('Like the Restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('#viewButton');
    I.click('#viewButton');
    I.amOnPage('/#/detail');
    I.wait(5);
    I.seeElement('button');
    I.click('button');
    const label = await I.grabAttributeFrom('button', 'aria-label');
    console.log(label);
    if (label.includes('unlike resto')){
        console.log('Unlike Resto');
    } else if (label.includes('like resto')){
        console.log('Like Resto');
    }
    I.wait(5);
    I.seeElement('#button_navbar_like');
    I.click('#button_navbar_like');
    I.wait(5);
    I.seeElement('#resto_list_all_favorite');
    I.see('View Detail');
  });

  Scenario('unLike the Restaurant', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('#viewButton');
    I.click('#viewButton');
    I.amOnPage('/#/detail');
    I.wait(5);
    I.seeElement('button');
    I.click('button');
    I.click('button');
    const label = await I.grabAttributeFrom('button', 'aria-label');
    console.log(label);
    if (label.includes('unlike resto')){
        console.log('Unlike Resto');
    } else if (label.includes('like resto')){
        console.log('Like Resto');
    }
    I.wait(5);
    I.seeElement('#button_navbar_like');
    I.click('#button_navbar_like');
    I.wait(5);
    I.seeElement('#resto_list_all_favorite');
    I.dontSee('View Detail');
  });
