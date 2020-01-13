import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myplug from './utils/my.plug'
import mock from './mock'


Vue.config.productionTip = true


Vue.use(ElementUI);
Vue.use(myplug);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
