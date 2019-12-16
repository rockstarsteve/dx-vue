import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import GlobalMessageTemplate from '@/components/GlobalMessageTemplate.vue'

Vue.component('global-message-template', GlobalMessageTemplate)

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  render: h => h(App),
}).$mount('#app')


