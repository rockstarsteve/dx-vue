<template>
    <div class="content">
        <vue-slider
                v-model="value"
                :tooltip="'none'"
                :process-style="{ backgroundColor: 'pink' }"
                :tooltip-style="{ backgroundColor: 'pink', borderColor: 'pink' }"
        >
            <template v-slot:dot="{ value, focus }">
                <div :class="['custom-dot', { focus }]"></div>
            </template>
        </vue-slider>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'

    export default {
        components: {
            VueSlider
        },
        data: function () {
            return {
                value: 0
            }
        }
    }
</script>

<style scoped>

    .content {
        margin-left: 21px;
        margin-top: 50px;
        width: 500px;
        height: 50px;
    }

    /deep/.vue-slider-dot{
        width: 63px !important;
        height: 63px !important;
    }

    .custom-dot {
        /*width: 100%;*/
        /*height: 100%;*/
        width: 63px;
        height: 63px;
        border-radius: 0;
        background-color: pink;
        transition: all .3s;
        /*border: 8px solid green;*/
    }

    /*.custom-dot:hover {*/
    /*    transform: rotateZ(45deg);*/
    /*}*/

    /*.custom-dot.focus {*/
    /*    border-radius: 50%;*/
    /*}*/
</style>
