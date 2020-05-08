<template>
  <div class="content" id="allmap">

  </div>
</template>

<script>
  import {map} from './js/map2.js'

  export default {
    name: "syncMap",
    data() {
      return {
        ak: 'O2EGjeM3kB7hjTu0AMg0OFMkQHzF7w6B'
      }
    },
    mounted() {
      // this.$nextTick(() => {
        map().then(BMap => {
          this.map = new BMap.Map('allmap', {enableMapClick: false})
          let longitude = new BMap.Point(113.3084516700, 23.1112328400);
          let latitude = new BMap.Point(113.3352518200, 23.1083913100);
          const point = new BMap.Point(longitude, latitude)
          this.map.centerAndZoom(point, 1)
          this.map.enableScrollWheelZoom() // 启用滚轮放大缩小，默认禁用
          // this.map.enableContinuousZoom() // 启用地图惯性拖拽，默认禁用
        })
      // })
    },
  }
</script>

<style scoped>
  .content {
    width: 600px;
    height: 600px;
  }
</style>
