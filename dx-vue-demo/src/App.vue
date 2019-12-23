<template>
    <div id="app">
<!--        <img alt="Vue logo" src="./assets/logo.png">-->
<!--        <hr/>-->
<!--        <hello-yu-fa msg="Welcome to Your Vue.js App"/>-->
        <demo01/>
    </div>
</template>

<script>
    /***********************vue语法测试********************/
    // import HelloYuFa from './components/vue/HelloYuFa.vue'
    // import HelloYuFa2 from './components/vue/HelloYuFa2.vue'
    // import HelloYuFa3 from './components/vue/HelloYuFa3.vue'
    // import HelloYuFa4 from './components/vue/HelloYuFa4.vue'
    // import HelloYuFa5 from './components/vue/HelloYuFa5.vue'

     /*********************elementui测试******************/
    // import Demo1 from './components/element/Demo02.vue'

    /***********************swiper测试********************/
    // import Demo01 from './components/swiper/Demo01'

    /***********************svg测试********************/
    import Demo01 from './components/svg/Demo01'

    export default {
        name: 'app',
        components: {
            Demo01,
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

