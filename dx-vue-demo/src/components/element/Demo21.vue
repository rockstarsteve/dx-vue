<template>
    <div class="content">
        <el-radio v-model="radio" label="1">备选项1</el-radio>
        <el-radio v-model="radio" label="2">备选项2</el-radio>
        <el-radio v-model="radio" label="3">备选项3</el-radio>
    </div>
</template>

<script>
    export default {
        name: "Demo21",
        data() {
            return {
                radio: '1'
            };
        }

    }
</script>

<style lang="less" scoped>
    .content {

        /deep/label{
            position: relative;
            .el-radio__input {
                width: 100px;
                height: 50px;
                border: 0px solid #FFFFFF;
                .el-radio__inner {
                    width: 50px;
                    height: 25px;
                    border-radius: unset;
                    border: 0px solid #FFFFFF;
                }
            }
            .el-radio__label{
                position: absolute;
                color: #333333;
                left: 0px;
                top: 20px;
                z-index: 99999;
            }

            .el-radio__input.is-checked .el-radio__inner::after{
                width: 0;
                height: 0;
            }

        }

    }

</style>
