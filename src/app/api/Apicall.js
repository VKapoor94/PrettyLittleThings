import axios from 'axios';
import {BASE_URL} from './URL';
async function fetchProductsCall() {
  try {
    const response = await axios.get(BASE_URL + '/products/products');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default fetchProductsCall;
