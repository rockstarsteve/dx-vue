import Vue from 'vue'
import App from './App.vue'

// 自定义全局组件挂载
import GlobalMessageTemplate from '@/components/vue/GlobalMessageTemplate.vue'

Vue.component('global-message-template', GlobalMessageTemplate)


// element ui使用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
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
//
// Vue.use(VueTouch, {name: 'v-touch'})

// 引入jQuery
// import $ from 'jquery'

// Vue.prototype.$ = $;


// vue-router
// import router from '@/router/index'

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

new Vue({
  render: h => h(App),
  // router
}).$mount('#app')
