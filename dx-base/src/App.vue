<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="less">
    @import "./assets/font/font.css";

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    *::-webkit-scrollbar {
        display: none;
    }

    button{
        outline: none;
    }


    #app {
        width: 100vw;
    }
</style>
