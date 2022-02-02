import Vue from "vue";
import axios from "axios";
import { Notification } from "element-ui";
import { roundTwoDecimals } from "../helpers/functions";

export default {
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
      const { products } = state.cart;
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
    REMOVE_PRODUCT_FROM_CART(state, id) {
      state.cart.products = state.cart.products.filter(
        (item) => item.id !== id
      );
    },
    CLEAR_CART(state) {
      state.cart.products = [];
    },
  },
  actions: {
    fetchProducts(context) {
      context.commit("LOADING_PRODUCTS", true);

      axios.get(`${process.env.VUE_APP_ROOT_API}/Products`).then((data) => {
        context.commit("PRODUCTS", data.data);
        context.commit("LOADING_PRODUCTS", false);
      });
    },
    addProductToCart(context, payload) {
      context.commit("ADD_PRODUCT_TO_CART", payload);
    },
    removeProductFromCart(context, id) {
      context.commit("REMOVE_PRODUCT_FROM_CART", id);
    },
    clearCart(context) {
      context.commit("CLEAR_CART");
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
};
