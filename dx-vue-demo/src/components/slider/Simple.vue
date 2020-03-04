<template>
    <div content="content">
        测试：<button @click="getVal()">打印值</button><br/>
<!--        <slider :value-fun="sliderVal" :min="0" :max="100"></slider>-->
        <slider :value="val" ></slider>
    </div>
</template>

<script>


    export default {
        name: "Demo01",
        components: {
            slider
        },
        data(){
            return {
                val: 10
            }
        },
        // methods: {
        //     sliderVal(min, max, total) {
        //         console.log("数值是： " + min + '  -  ' + max + '  -  ' + total)
        //     }
        // },
        methods: {
            getVal() {
                console.log("数值是： " + this.val)
            }
        },
    }
</script>

<style lang="less" scoped>

    .content {
        width: 200px;
        height: 200px;
        background-color: pink;
    }


</style>
