/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
import CONFIG from "./config";

const DATA_API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH_RESTAURANT: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
};

export default DATA_API_ENDPOINT;
