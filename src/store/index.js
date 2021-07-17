import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFetching: false
  },
  mutations: {
    setIsFetching(state, payload) {
      state.isFetching = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
