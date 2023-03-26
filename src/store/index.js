import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavActive: false
  },
  getters: {
  },
  mutations: {
    changeNav(state){
      state.isNavActive = !state.isNavActive
      console.log(state.isNavActive)
    }
  },
  actions: {
  },
  modules: {
  }
})
