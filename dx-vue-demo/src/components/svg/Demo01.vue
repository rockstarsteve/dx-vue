<template>
    <div class="content">
        hello world
        <svg-icon class="svg" icon-class="littleday"/>

        <svg-icon icon-class="el-table" />
    </div>
</template>

<script>
    export default {
        name: "Demo01"
    }
</script>

<style scoped>

    /* svg 支持按字体的方式去动态调整图标大小，颜色等等*/
    .content{
        font-weight: bold;
        font-size: xx-large;
    }

    .svg{
        width: 20rem !important;
        height: 20rem !important;
    }

    

</style>
