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
    addTasks({ commit }, params) {
      commit("addTasks", params);
    },
    updateTasks({ commit }, params) {
      commit("updateTasks", params);
    },
  },
  mutations: {
    addTasks(state, params) {
      state.tasks.push(params);
    },
    updateTasks(state, { taskId, ...params }) {
      state.tasks[taskId] = params;
    },
  },
});

export default store;
