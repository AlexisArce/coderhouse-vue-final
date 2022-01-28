import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Notification } from "element-ui";
import { roundTwoDecimals } from "../helpers/functions";

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
    ADD_PRODUCT_TO_CART(state, item) {
      let { products } = state.cart;
      const index = products.findIndex((i) => i.id === item.id);

      if (index > -1) {
        const oldQuantity = products[index].quantity;
        item.quantity = oldQuantity + item.quantity;
        Vue.set(products, index, item);
      } else {
        products.push(item);
      }

      Notification.success({
        title: "Agregado",
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
  getters: {
    products: (state) => {
      return state.products;
    },
    cart: (state) => {
      return state.cart;
    },
    totalItems(state) {
      const { products } = state.cart;

      return products.reduce((acum, prod) => acum + prod.quantity, 0);
    },
    totalAmount(state) {
      const { products } = state.cart;

      return roundTwoDecimals(
        products.reduce((acum, prod) => acum + prod.quantity * prod.price, 0)
      );
    },
    loadingProducts: (state) => {
      return state.loadingProducts;
    },
  },
  modules: {},
});
