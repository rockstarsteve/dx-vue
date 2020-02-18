<template>
    <div class="content">

        <slider :value-fun="sliderVal" :min="0" :max="100"></slider>

    </div>
</template>

<script>
    import slider from './components/vue-slider3'

    export default {
        name: "Demo03",
        components: {
            slider:slider
        },
        data() {
            return {
                Val: 20
            }
        },
        methods:{
            sliderVal(min,max,total){

            }
        },
    }
</script>

<style lang="less" scoped>
    .content {
        width: 400px;
        height: 400px;
        .slider{

        }
    }

</style>
