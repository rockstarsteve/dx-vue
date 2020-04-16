<template>
  <div class="content">
    <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
      <div class="menu-container" ref="menuContainer">
        <!-- 这个是内容 -->
      </div>
    </v-touch>
  </div>
</template>

<script>
  export default {
    name: "Simple",
    data() {
      return {}
    },
    methods: {
      swiperleft: function () {
        console.log("左划")
      },
      swiperright: function () {
        console.log("右滑")
      }
    }
  }
</script>

<style scoped>

</style>
