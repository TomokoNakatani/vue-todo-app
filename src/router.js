import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";
import New from "./components/New.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: List },
  { path: "/New", component: New },
];

const router = new Router({
  routes,
  mode: "history",
});

export default router;
