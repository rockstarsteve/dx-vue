<template>
    <div id="app">
        <!--        <img alt="Vue logo" src="./assets/logo.png">-->
        <!--        <hr/>-->
        <!--        <hello-yu-fa msg="Welcome to Your Vue.js App"/>-->
        <demo/>
    </div>
</template>

<script>

    // import Demo from './components/Temp'

    /**********************错误复现********************/
    // import Demo from './components/erro/Demo01'

    /***********************vue语法测试********************/
    // import Demo from './components/vue/Demo05.vue'

    /*********************elementui测试******************/
    // import Demo from './components/element/Demo41'

    /***********************swiper测试********************/
    // import Demo from './components/swiper/Demo02'

    /***********************svg测试********************/
    // import Demo from './components/svg/Demo01'

    /***********************vueqr测试********************/
    // import Demo from './components/vueqr/Demo01'

    /***********************echarts测试********************/
    // import Demo from './components/echarts/Demo01'

    /***********************事件监听测试********************/
    // /import Demo from './components/monitor/Demo02'

    /***********************base64js测试********************/
    // import Demo from './components/base64/Demo03'

    /***********************Slider 滑块测试********************/
    // import Demo from './components/slider/Demo23'

    /***********************软键盘测试********************/
    // import Demo from './components/keybord/Demo05'


    /**********************弹框********************/
    // import Demo from './components/dialog/Demo01'

    /**********************axios********************/
    import Demo from './components/axios/Demo01'


    export default {
        name: 'app',
        components: {
            Demo,
        }
    }
</script>

<style>
    body {
        margin: 0px;
        padding: 0px;
    }

    #app {
        width: 100%;
        height: 100%;
    }
</style>

