/* eslint-disable space-before-blocks */
import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async mainRestaurants() {
    const response = await fetch(API_ENDPOINT.MAIN);
    const responseJson = await response.json();
    return responseJson.restaurants;
    // console.log(responseJson);
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
