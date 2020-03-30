<template>
    <div class="content">
        <el-pagination
                class="pagination"
                background
                layout="prev, pager, next"
                :page-count="20"
                @current-change="handleCurrentChange"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Page",
        methods: {
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style lang="less" scoped>
    .content {
        /deep/ .pagination {
            .btn-prev {
                width: 200px;
                height: 200px;
                border-radius: 50%;

                .el-icon {
                    height: 20px;
                    font-size: 50px;
                    line-height: 25px;
                }
            }

            .btn-next {
                width: 200px;
                height: 200px;
                border-radius: 50%;

                .el-icon {
                    height: 20px;
                    font-size: 50px;
                    line-height: 25px;
                }
            }

            .more {
                width: 200px;
                height: 200px;
                border-radius: 50%;
            }

            .more::before {
                font-size: 50px;
                line-height: 200px;
            }

            .el-pager {
                .number {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    font-size: 50px;
                    line-height: 200px;
                }
            }
        }
    }
</style>
