<template>
    <div class="block">
        <span class="demonstration">默认</span>
        <el-image :src="src" :style="styleObject"></el-image>
    </div>
</template>

<script>
    export default {
        name: "Image",
        props: {
            src: String,
            width: {
                type: Number,
                default: 800
            },
            height: {
                type: Number,
                default: 800
            },
        },
        computed: {
            styleObject: function () {
                return {
                    width: this.width + 'px',
                    height: this.height + 'px'
                }
            }
        },

    }
</script>

<style lang="less" scoped>

</style>
