import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";

Vue.use(Router);

const routes = [{ path: "/", component: List }];

const router = new Router({
  routes,
  mode: "history",
});

export default router;
