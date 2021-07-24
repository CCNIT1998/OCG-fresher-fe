import { createStore } from 'vuex';
import products from './modules/products.module.js';
import cart from './modules/cart.module.js'
import user from "./modules/user.module"
const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  strict: debug,
  modules: {
    products,
    cart,
    user
  },
});
export default store;
