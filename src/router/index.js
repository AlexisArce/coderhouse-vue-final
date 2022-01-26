import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

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
    component: () => import("../views/Login"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Register"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/Cart"),
  },
  {
    path: "/products/:id",
    name: "ItemDetails",
    component: () => import("../components/ItemDetails"),
  },
  {
    path: "/administration",
    name: "Administration",
    component: () => import("../views/Administration"),
    beforeEnter: (to, from, next) => {
      let isAuthenticated = true;
      let isAdmin = true;
      if (!isAuthenticated || !isAdmin) next({ path: "/login" });
      else next();
    },
    children: [
      {
        path: "products",
        component: () => import("../components/ProductsCRUD"),
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
