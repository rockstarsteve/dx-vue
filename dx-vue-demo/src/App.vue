<template>
    <div id="app">
<!--        <img alt="Vue logo" src="./assets/logo.png">-->
<!--        <hr/>-->
<!--        <hello-yu-fa msg="Welcome to Your Vue.js App"/>-->
        <demo/>
    </div>
</template>

<script>
    /***********************vue语法测试********************/
    // import Demo from './components/vue/HelloYuFa5.vue'

     /*********************elementui测试******************/
    // import Demo from './components/element/Temp'

    /***********************swiper测试********************/
    // import Demo from './components/swiper/Demo02'

    /***********************svg测试********************/
    // import Demo from './components/svg/Demo01'

    /***********************vueqr测试********************/
    // import Demo from './components/vueqr/Demo01'

    /***********************echarts测试********************/
    import Demo from './components/echarts/Demo03'



    export default {
        name: 'app',
        components: {
            Demo,
        }
    }
</script>

<style>
    body{
        margin: 0px;
        padding: 0px;
    }
    #app {
        width: 100%;
        height: 100%;
    }
</style>

