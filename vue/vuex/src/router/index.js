import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookView from "../views/BookView";
import NaverView from "../views/NaverView";
import NaverBlogView from "../views/naver/NaverBlogView";
import NaverShopView from "../views/naver/NaverShopView";
import NaverNewsView from "../views/naver/NaverNewsView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/book",
    name: "BookView",
    component: BookView,
  },
  {
    path: "/naver",
    name: "Naverview",
    component: NaverView,
    children: [
      {
        path: "naver",
        name: "NaverBlogView",
        component: NaverBlogView,
      },
      {
        path: "naver",
        name: "NaverShopView",
        component: NaverShopView,
      },
      {
        path: "naver",
        name: "NaverNewsView",
        component: NaverNewsView,
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
