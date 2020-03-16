<template>
    <div class="content">
        <div id="flipbook" ref="flipbook">
            <div class="hard" style="background-color: royalblue"> Turn.js</div>
            <div class="hard" style="background-color: #17694f">第一的后面</div>
            <div style="background-color: fuchsia"> Page 1</div>
            <div style="background-color: aquamarine"> Page 2</div>
            <div style="background-color: #FFD00D"> Page 3</div>
            <div style="background-color: khaki"> Page 4</div>
            <div class="hard" style="background-color: #4ac4ac">倒数第二</div>
            <div class="hard" style="background-color: #c3c3c3">最后</div>
        </div>
    </div>
</template>

<script>

    import $ from 'jquery'
    import turn from './components/turn.min'

    export default {
        name: "Simple",
        methods: {},
        mounted: function () {
            $("#flipbook").turn({
                width: 400,
                height: 300,
                autoCenter: true,
                elevation: 50,
            });
            $("#flipbook").turn("peel", "br");
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
        height: 500px;
        div:nth-child(1){
            margin-left: 0 !important;
        }
    }
</style>
