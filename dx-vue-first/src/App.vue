<template>
  <div id="app">
    <img src="./assets/logo.png">
    hello
    <div id="content">
      <router-view/>
    </div>
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
    text-align: left;
    /*color: #2c3e50;*/
    /*color: aqua;*/
    margin-top: 60px;
  }
  #app div{
   text-align: center;
    color: #db5860;
  }
</style>
