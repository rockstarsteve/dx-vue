import Vue from 'vue'
import App from './App.vue'

// 自定义全局组件挂载
import GlobalMessageTemplate from '@/components/vue/GlobalMessageTemplate.vue'
Vue.component('global-message-template', GlobalMessageTemplate)


// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

//echarts
// import echarts from 'echarts'
// Vue.prototype.echarts = echarts;


// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)


// icon
import '@/components/svg/components/icons'



new Vue({
  render: h => h(App),
}).$mount('#app')


