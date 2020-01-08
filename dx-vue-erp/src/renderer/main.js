import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
// eslint-disable-next-line no-unused-vars
import mock from './mock'
import Pagination from './components/Pagination'
import { resetForm } from './utils/ruoyi'

// elementui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import myplug from './utils/my.plug'
Vue.use(myplug)
// 全局组件挂载
Vue.component('Pagination', Pagination)
Vue.prototype.resetForm = resetForm
Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'error' })
}

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
