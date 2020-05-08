<template>
  <div class="content">

  </div>
</template>

<script>
  import {MP} from './js/map.js'

  export default {
    name: "syncMap",
    data() {
      return {
        ak: 'O2EGjeM3kB7hjTu0AMg0OFMkQHzF7w6B'
      }
    },
    mounted() {
      this.$nextTick(function () {
        let _this = this;
        MP(_this.ak).then(BMap => {
          // 百度地图API功能
          // ...
          console.log("ook")



        })
      })
    },
  }
</script>

<style scoped>
  .content {
    width: 400px;
    height: 400px;
  }
</style>
