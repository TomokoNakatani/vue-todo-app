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
  actions: {
    addTasks({ commit }, { title, body }) {
      commit("addTasks", { title: title, body: body });
    },
  },
  mutations: {
    addTasks(state, { title, body }) {
      state.tasks.push({
        title: title,
        body: body,
      });
    },
  },
});

export default store;
