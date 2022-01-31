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
    component: () => import("../components/Register"),
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
    path: "/administration",
    name: "Administration",
    component: () => import("../views/Administration"),
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

export default router;
