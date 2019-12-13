import Vue from 'vue'
import App from './App.vue'
import GlobalMessageTemplate from '@/components/GlobalMessageTemplate.vue'

Vue.component('global-message-template', GlobalMessageTemplate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


