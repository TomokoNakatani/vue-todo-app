import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      { title: "Vue.js", body: "Vue.jsでアプリを作成する" },
      { title: "Vuex", body: "Vuexを導入する" },
      { title: "VueRouter", body: "VueRouterを導入する" },
    ],
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
});

export default store;
