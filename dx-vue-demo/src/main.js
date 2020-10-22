import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 自定义全局组件挂载
import GlobalMessageTemplate from '@/components/vue/GlobalMessageTemplate.vue'

Vue.component('global-message-template', GlobalMessageTemplate)

// vuex使用
import store from '@/store'

// element ui使用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//  // echarts使用
// import echarts from 'echarts'
// Vue.prototype.echarts = echarts;


// swiper使用
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)


// icon的使用
import '@/components/svg/components/icons'

// VideoPlayer的使用
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-contrib-hls'
import VideoPlayer from 'vue-video-player'

Vue.use(VideoPlayer);


// 手势控制插件
// import VueTouch from 'vue-touch'
// Vue.use(VueTouch, {name: 'v-touch'})


// 引入jQuery
// import $ from 'jquery'
// Vue.prototype.$ = $;


// 注册一个全局自定义指令 `v-focus`
Vue.directive('add', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding, vnode) {
    // 聚焦元素
    // el.focus()
    console.log(`binding:${binding}`)
    console.log(`vnode:${vnode}`)

  }
})


// js测试
import '@/components/js/test.js'


// vue-router组件
import router from '@/router/index.js'

// //vue 项目在路由切换的时候调用
// router.beforeEach(function (to,from,next){
//   //console.log('url1:', document.URL);
//   setTimeout(function (){
//     //console.log('url2:', document.URL);
//
//     next();
//     //console.log('to:', to, 'from:', from, 'URL:', document.URL);
//     sensors.quick("autoTrackSinglePage"); // after the next(); statement
//   },0);
// });


import Print from '@/util/print'
Vue.use(Print) // 注册



import nprint from 'vue-print-nb'
Vue.use(nprint)


//mock测试对象
console.log("环境：", process.env.NODE_ENV)
if (process.env.NODE_ENV == 'dev') {
  const {mockXHR} = require('./mock/index')
  mockXHR()
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
