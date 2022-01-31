import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/es";
import "element-ui/lib/theme-chalk/index.css";

import { MazPhoneNumberInput } from "maz-ui";
import "maz-ui/lib/css/index.css";

Vue.use(ElementUI, { locale });
Vue.use(MazPhoneNumberInput);

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
