import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";
import New from "./components/New.vue";
import Edit from "./components/Edit.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: List },
  { path: "/new", component: New },
  { path: "/edit/:id", component: Edit, props: true, name: "edit" },
];

const router = new Router({
  routes,
  mode: "history",
});

export default router;
