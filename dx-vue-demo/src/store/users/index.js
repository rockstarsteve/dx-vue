export default {
  namespaced: true,
  //
  state: {
    age: 22
  },
  getters: {
    getAge(state) {
      return state.age
    }
  },
  mutations: {
    increseAges(state, num = 1) {
      state.age += num
    }
  },
  actions: {},
}
