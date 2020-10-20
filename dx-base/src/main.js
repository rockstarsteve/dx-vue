import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/icons'
import router from './router'
import './utils/veevalidate'

Vue.config.productionTip = false

Vue.use(ElementUI);

//挂载自己的模态框
import Toast from '@/components/toast'
Vue.use(Toast)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
