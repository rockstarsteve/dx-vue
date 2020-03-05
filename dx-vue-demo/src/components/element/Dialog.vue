<template>
    <div class="content">
        <el-button type="text" @click="dialogTableVisible = true">打开嵌套图片的 Dialog</el-button>
        <el-dialog :visible.sync="dialogTableVisible" :close-on-click-modal="false">
            <el-image :src="url" fit="cover"></el-image>
            <el-image :src="close" fit="cover" @click="dialogTableVisible = false"></el-image>
            <el-image :src="close" fit="cover" @click="dialogTableVisible = false"></el-image>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        data() {
            return {
                dialogTableVisible: false,
                url: require("@/assets/good.jpg"),
                close: require("@/assets/close.png")
            }
        }
    }
</script>

<style lang="less" scoped>
    .content {
        /deep/ .el-dialog__wrapper {
            .el-dialog {
                background-color: transparent;
                box-shadow: 0 0;
                position: relative;

                .el-dialog__header {
                    display: none;
                }


                .el-dialog__body {
                    display: flex;

                    .el-image:nth-child(2) {
                        img {
                            margin-top: -30px;
                            width: 40px;
                            height: 40px;
                            margin-right: 20px;
                        }
                    }

                    .el-image:nth-child(3) {
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        top: -15px;
                        right: -15px;
                    }

                }
            }
        }
    }

</style>
