import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'https://api.shoppingcart.com'
  : 'http://localhost:3000';

//Api Intergration for Product
export const productsUrl = baseUrl + '/products';

//Api Intergration for Cart
export const cartUrl = baseUrl + '/cart';

// Api Intergration for wishlist
export const wishlistUrl = baseUrl + '/wishlist';
