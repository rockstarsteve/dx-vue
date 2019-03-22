import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组件公用的状态
  state: {
    count: 0
  },
  // 定义改变状态方法
  mutations: {
    increase () {
      this.state.count = this.state.count + 1
    }
  },
  actions: {

  }
})
