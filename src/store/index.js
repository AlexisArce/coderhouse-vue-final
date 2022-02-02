import Vue from "vue";
import Vuex from "vuex";
import productsModule from "./products";
import usersModule from "./users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: productsModule,
    users: usersModule,
  },
});
