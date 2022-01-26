import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Notification } from "element-ui";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      products: [],
    },
    products: [],
    loadingProducts: false,
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    LOADING_PRODUCTS(state, payload) {
      state.loadingProducts = payload;
    },
    ADD_PRODUCT_TO_CART(state, payload) {
      state.cart.products.push(payload);
      //TODO: AGREGAR ELEMENT ui modal
      Notification.success({
        title: "Agregado al carrito",
        message: "El producto fue agregado al carrito!",
      });
    },
  },
  actions: {
    fetchProducts(context) {
      context.commit("LOADING_PRODUCTS", true);
      axios
        .get("https://61ba455648df2f0017e5aa20.mockapi.io/Products")
        .then((data) => {
          context.commit("PRODUCTS", data.data);
          context.commit("LOADING_PRODUCTS", false);
        });
    },
    addProductToCart(context, payload) {
      context.commit("ADD_PRODUCT_TO_CART", payload);
    },
  },
  modules: {},
});
