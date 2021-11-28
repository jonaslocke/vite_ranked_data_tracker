import { createStore } from "vuex";

export default createStore({
  state: {
    champions: {},
  },
  mutations: {
    setChampions: (state, payload) => (state.champions = payload),
  },
  getters: {
    getChampions(state) {
      return state.champions;
    },
  },
  actions: {
    fetchChampions: async ({ commit }) => {
      const api = import.meta.env.VITE_DATA_DRAGON;
      const response = await fetch(api);
      const data = await response.json();
      commit("setChampions", data.data);
    },
  },
  modules: {},
});
