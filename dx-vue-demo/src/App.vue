<template>
  <div id="app">
    <div class="list-group">

      <div class="navbottom">
        <router-link to="a">跳转1</router-link>
      </div>

      <div class="navbottom">
        <router-link to="b">跳转2</router-link>
      </div>

      <div class="navbottom">
        <router-link to="c">跳转3</router-link>
      </div>
      <div class="navbottom">
        <router-link to="d">跳转4</router-link>
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .list-group {
    position: absolute;
    bottom: 0;
  }
  .navbottom {
    width: 5rem;
    float: left;
  }
</style>
