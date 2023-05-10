import Vue from "vue";
import VueRouter from "vue-router";
// 라우트 컴포넌트
import Home from "../views/HomeView.vue";
import Book from "../views/BookView.vue";
import About from "../views/AboutView.vue";

//--------------------
import Booklist from "../components/book/BookList.vue";
import BookCreate from "../components/book/BookCreate.vue";
import BookModify from "../components/book/BookModify.vue";
import BookView from "../components/book/BookView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/book",
    name: "book",
    component: Book,
    redirect: "/book/list",
    children: [
      {
        path: "list",
        name: "booklist",
        component: Booklist,
      },
      {
        path: "create",
        name: "bookcreate",
        component: BookCreate,
      },
      {
        path: "modify",
        name: "bookmodify",
        component: BookModify,
      },
      {
        path: "detail/:isbn",
        name: "bookdetail",
        component: BookView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
