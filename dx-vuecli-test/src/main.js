import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log('main' + process.env.VUE_APP_FOO)
console.log('main' + process.env.VUE_APP_FOO)


new Vue({
    render: h => h(App),
}).$mount('#app')
