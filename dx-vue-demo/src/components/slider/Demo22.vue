<template>
    <div class="content">
        <div>demo22</div>
        <vue-slider v-model="value3" :tooltip="'always'" :process="true" :min="44" :max="1000">
            <template v-slot:tooltip="{ value, focus }">
                <div :class="['custom-tooltip', { focus }]">{{ value + 'kg' }}</div>
            </template>
        </vue-slider>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'

    export default {
        name: "Demo22",
        components: {
            VueSlider
        },
        data() {
            return {
                value3: [60, 200],
            }
        }
    }
</script>

<style lang="less" scoped>
    .content {
        display: flex;
        margin-left: 21px;
        margin-top: 50px;
        width: 500px;
        height: 50px;
        /deep/.vue-slider-ltr{
            width: 1000px !important;
        }
    }
</style>
