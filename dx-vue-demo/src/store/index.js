import Vue from 'vue'
import Vuex from 'vuex'

import users from './users/index'


Vue.use(Vuex)

export default new Vuex.Store({
  //
  state: {
    num: 1
  },
  getters: {
    getNum(state) {
      return state.num
    }
  },
  mutations: {
    increse(state, num = 1) {
      state.num += num
    }
  },
  actions: {},
  modules: {
    users
  }
})
