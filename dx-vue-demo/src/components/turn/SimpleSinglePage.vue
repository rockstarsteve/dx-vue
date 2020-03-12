<template>
    <div class="main">
        <button @click="pre">前进</button>
        <button @click="next">后退</button>
        <div id="flipbook" ref="flipbook">

            <page01></page01>
            <page02></page02>
            <page03></page03>
            <page04></page04>
            <page05></page05>

        </div>
    </div>
</template>

<script>
    // component
    import Page01 from './page/Page01'
    import Page02 from './page/Page02'
    import Page03 from './page/Page03'
    import Page04 from './page/Page04'
    import Page05 from './page/Page05'
    // js
    import $ from 'jquery'
    import turn from './components/turn.min'

    export default {
        name: "SimpleSinglePage",
        components: {
            Page01, Page02, Page03, Page04, Page05
        },
        methods: {
            pre() {
                console.log("要打印的pre日志是：" + "")
                $("#flipbook").turn("previous");
            },
            next() {
                console.log("要打印的next日志是：" + "")
                $("#flipbook").turn("next");
            }
        },
        mounted: function () {
            $("#flipbook").turn({
                width: 400,
                height: 300,
                autoCenter: true
            });
            // $("#flipbook").turn("disable", true);
        }
    }
</script>

<style lang="less" scoped>

    .main {
        margin-top: 300px;
        margin-left: 200px;
        background-color: pink;
        width: 500px;
        height: 500px;

        /*div:nth-child(1) {*/
        /*    margin-left: 0 !important;*/
        /*}*/
    }

</style>
