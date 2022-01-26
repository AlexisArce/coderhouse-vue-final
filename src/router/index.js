import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Register/index.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/Cart.vue"),
  },
  {
    path: "/products/:id",
    name: "ItemDetails",
    component: () => import("../components/ItemDetails/index.vue"),
  },
  {
    path: "/administration",
    name: "Administration",
    component: () => import("../views/Administration.vue"),
    beforeEnter: (to, from, next) => {
      let isAuthenticated = true;
      let isAdmin = true;
      if (!isAuthenticated || !isAdmin) next({ path: "/login" });
      else next();
    },
    children: [
      {
        path: "products",
        component: () => import("../components/ProductsCRUD/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
