<template>
    <div class="song">
        <p ref="node" @click='fade'>hello</p>

        <div class="img" @click="remove" ref="img">
            <el-image :src="url"></el-image>
        </div>

    </div>
</template>

<script>
    import animate from 'animate.css'
    export default {
        name: "Simple",
        data() {
            return {
                url: require("@/assets/logo.png")
            }
        },
        methods: {
            fade: function () {
                this.$refs.node.setAttribute('class', 'animated bounceOutLeft')
            },
            remove() {
                this.$refs.img.setAttribute("class", 'animated rubberBand')
            }
        }
    }
</script>

<style lang="less" scoped>
    .song {
        display: inline-flex;
        flex-direction: column;




        /*align-items : center;*/
        /*align-content: center;*/
        /*justify-content: space-around;*/
        justify-content: center;

    }

</style>
