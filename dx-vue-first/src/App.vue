<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="content">
      <router-view/>
    </div>
    <div>
      <first-child></first-child>
      <second-child></second-child>
    </div>
  </div>
</template>

<script>
  import firstChild from '@/components/AChild'
  import secondChild from '@/components/BChild'

  export default {
    name: 'App',
    components: {
      firstChild,
      secondChild,
    }
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

  #app div {
    text-align: center;
    color: #db5860;
  }
</style>
