import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { guest: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
    meta: { guest: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register"),
    meta: { guest: true },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/Cart"),
    meta: { guest: true },
  },
  {
    path: "/products/:id",
    name: "ItemDetails",
    component: () => import("../components/ItemDetails"),
    meta: { guest: true },
  },
  {
    path: "/administration/products",
    name: "Products",
    component: () => import("../views/Products"),
    meta: { requiresAuth: true },
  },
  {
    path: "/administration/orders",
    name: "Orders",
    component: () => import("../views/Orders"),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated && store.getters.isAdmin) {
      next("/administration/orders");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
