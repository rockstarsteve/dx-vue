<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="content">
        <div>
            <vue-slider v-model="value" :tooltip="'always'" :min="44" :max="1000">
                <template v-slot:tooltip="{ value, focus }">
                    <div :class="['custom-tooltip', { focus }]">{{ value + 'kg' }}</div>
                </template>
            </vue-slider>
        </div>
    </div>
</template>

<script>
    // App.vue
    // $themeColor: #3498db;
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'


    export default {
        name: "Demo04",
        components: {
            VueSlider
        },
        data() {
            return {
                value: 1,
                mobile: 13787898765
            }
        },
        created: () => {

            const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if (reg.test(this.mobile)) {
                console.log("ok")
            }else {
                flase
            }
        }
    }
</script>

<style lang="less" scoped>
    .content {
        margin-top: 50px;
        width: 500px;
        height: 50px;

        /*.custom-tooltip {*/
        /*    transform: translateY(5px);*/
        /*}*/

        /*.custom-tooltip.focus {*/
        /*    font-weight: bold;*/
        /*}*/
    }

</style>
