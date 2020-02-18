<template>
    <div content="content">
        测试：
        <button @click="getVal()">打印值</button>
        <br/>
        <slider :value="val"></slider>
    </div>
</template>

<script>
    import slider from './components/vue-slider2'

    export default {
        name: "Demo02",
        components: {
            slider
        },
        data() {
            return {
                val: 10
            }
        },
        methods: {
            getVal() {
                console.log("数值是： " + this.val)
            }
        },
    }
</script>

<style scoped>
    .content {
        width: 200px;
        height: 200px;
        background-color: pink;
    }
</style>
