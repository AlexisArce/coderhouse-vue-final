import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {},
    products: [],
    loadingProducts: false,
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    LOADING_PRODUCTS(state, payload) {
      state.loadingProducts = payload;
    },
  },
  actions: {
    fetchCart(context) {
      axios
        .get("https://61ba455648df2f0017e5aa20.mockapi.io/Carts/1")
        .then((data) => {
          context.commit("CART", data.data);
        });
    },

    fetchProducts(context) {
      context.commit("LOADING_PRODUCTS", true);
      axios
        .get("https://61ba455648df2f0017e5aa20.mockapi.io/Products")
        .then((data) => {
          context.commit("PRODUCTS", data.data);
          context.commit("LOADING_PRODUCTS", false);
        });
    },
  },
  modules: {},
});
