<template>
    <div class="content">
        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "Temp",
    }
</script>

<style lang="less" scoped>

    .content {
        .el-row{
            .el-button:nth-child(3){
                background-color: red;
                width: 34px;
                height: 34px;
            }
        }
    }


</style>
