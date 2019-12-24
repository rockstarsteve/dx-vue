<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-main>
            Main2
        </el-main>
    </el-container>
</template>

<script>
    import Header from './component/header/index'

    export default {
        name: "Demo2",
        components:{
            Header

        }
    }
</script>

<style scoped>
    .el-header{
        height: 10vh;
        width: 100%;
        background-color: #FFFFFF;
        color: #333;
    }

    .el-main {
        height: 90vh;
        width: 100%;
        color: #000;
        background-color: #F6F8FB;
        box-shadow:0px 17px 51px 0px rgba(193,193,193,0.28) inset;
    }
</style>
