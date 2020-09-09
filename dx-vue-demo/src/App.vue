<template>
  <div id="app">
    <demo/>
  </div>
</template>

<script>
  // 临时测试文件
  // import Demo from './components/Temp.vue'

  /**********************错误复现********************/
  // import Demo from './components/erro/Demo01'

  /***********************vue语法测试********************/
  // import Demo from './components/vue/Pagination'

  /*********************elementui测试******************/
  // import Demo from './components/element/SimpleTabs'

  /***********************swiper测试********************/
  // import Demo from './components/swiper/OnesideSlide'

  /***********************svg测试********************/
  // import Demo from './components/svg/Demo01'

  /***********************vueqr测试********************/
  // import Demo from './components/vueqr/Simple'

  /***********************echarts测试********************/
  // import Demo from './components/echarts/Demo01'

  /***********************事件监听测试********************/
  // /import Demo from './components/monitor/Demo02'

  /***********************base64js测试********************/
  // import Demo from './components/base64/Demo03'

  /***********************Slider 滑块测试********************/
  // import Demo from './components/slider/Demo23'

  /***********************软键盘测试********************/
  // import Demo from './components/keybord/Demo02'

  /**********************弹框********************/
  // import Demo from './components/dialog/Demo02'

  /**********************axios********************/
  // import Demo from './components/axios/Demo02'

  /***********************ajv语法测试********************/
  // import Demo from './components/ajv/Simple'

  /***********************animate语法测试********************/
  // import Demo from './components/animate/Simple'

  /***********************vue-video-player测试********************/
  // import Demo from './components/vuevideoplayer/Simple'

  /***********************trun测试********************/
  // import Demo from './components/turn/Simple'

  /***********************tabs测试********************/
  // import Demo from './components/tabs/SimpleTabs'

  /***********************lottie测试********************/
  // import Demo from './components/lottie/Simple'

  /***********************es6测试********************/
  // import Demo from './components/es6/Number'

  /***********************hammerjs测试********************/
  // import Demo from './components/touch/Simple'

  /***********************less css测试********************/
  // import Demo from './components/css/Simple'

  /***********************百度map测试********************/
  // import Demo from './components/map/syncMap2'

  /***********************pdf预览测试********************/
  // import Demo from './components/pdf/showPdf'

  /***********************progress进度条测试********************/
  // import Demo from './components/progress/CpProgressTest'

  /***********************cli环境测试********************/
  import Demo from './components/evn/evnTest'

  export default {
    name: 'app',
    components: {
      Demo,
    }
  }
</script>

<style>
  body {
    margin: 0px;
    padding: 0px;
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>

