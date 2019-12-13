<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
<!--        <hr/>-->
<!--        <hello-yu-fa msg="Welcome to Your Vue.js App"/>-->
<!--        <hr/>-->
<!--        <hello-yu/>-->
<!--        <hr/>-->
<!--        <hello-yu-fa3/>-->
<!--        <hr/>-->
<!--        <hello-yu-fa4/>-->
        <hr/>
        <hello-yu-fa5/>
    </div>
</template>

<script>
    import HelloYuFa from './components/HelloYuFa.vue'
    import HelloYuFa2 from './components/HelloYuFa2.vue'
    import HelloYuFa3 from './components/HelloYuFa3.vue'
    import HelloYuFa4 from './components/HelloYuFa4.vue'
    import HelloYuFa5 from './components/HelloYuFa5.vue'

    export default {
        name: 'app',
        components: {
            HelloYuFa,
            HelloYu: HelloYuFa2,//名别名
            HelloYuFa3,
            HelloYuFa4,
            HelloYuFa5,
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
</style>

