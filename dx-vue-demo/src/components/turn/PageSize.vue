<template>
    <div class="content">
        <div id="flipbook" ref="flipbook">
            <div style="background-color: aquamarine">Page 1 with default size</div>
            <div class="own-size" style="width:100px; height:100px;background-color: khaki">
                Page 2 with own size
            </div>
        </div>
    </div>
</template>

<!--页面变大变小，不好看-->

<script>

    import $ from 'jquery'
    import turn from './components/turn.min'

    export default {
        name: "PageSize",
        methods: {},
        mounted: function () {
            $("#flipbook").turn({
                width: 400,
                height: 300,
                autoCenter: true
            });
        }
    }
</script>

<style lang="less" scoped>
    .content{
        margin-top: 300px;
        margin-left: 200px;
        background-color: pink;
        width: 500px;
        background-color: #409EFF;
        background-image: url("/assert/big-bg.png");
        height: 500px;
        #flipbook {
            width:700px;
            height:600px
        }

        #flipbook .page-wrapper{
            -webkit-perspective:2000px;
            -moz-perspective: 2000px;
            -ms-perspective: 2000px;
            perspective: 2000px;
        }

        #flipbook .p2,
        #flipbook .p3{
            width:300px;
            height:500px;
        }
    }
</style>
