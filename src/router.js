import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";
import New from "./components/New.vue";
import Edit from "./components/Edit.vue";
import Show from "./components/Show.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: List },
  { path: "/new", component: New },
  { path: "/edit/:id", component: Edit, name: "edit" },
  { path: "/show/:id", component: Show, name: "show" },
];

const router = new Router({
  routes,
  mode: "history",
});

export default router;
