/* eslint-disable import/no-unresolved */
import HomeRestaurant from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomeRestaurant,
  '/home': HomeRestaurant,
  '/detail/:id': DetailRestaurant,
  '/like': Like,
};

export default routes;
