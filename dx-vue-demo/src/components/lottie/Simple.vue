<template>
  <div class="bg">
    <img src="/images/big-bg.png" class="my-bg">
    <lottie class="content" :options="defaultOptions" :width="3840" :height="1940" v-on:animCreated="handleAnimation"/>
  </div>

</template>

<script>
  import Lottie from 'vue-lottie';

  import animationData from './json/data' // 引入json文件

  export default {
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions: {animationData: animationData},
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      }
    }
  }
</script>

<style scoped>

  .bg{
    position: relative;
  }
  .my-bg{
    position: absolute;
    z-index: 10;
  }
  .content{
    position: absolute;
    z-index: 20;
  }

</style>
