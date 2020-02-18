<template>
    <div class="content">
        <el-slider v-model="value1"></el-slider>
    </div>
</template>

<script>
    export default {
        name: "Demo31",
        data() {
            return {
                value1: 50
            }
        },
        watch: {
            value1(val, oldVal) {
                console.log("inputVal = " + val + " , oldValue = " + oldVal)
            }
        }

    }
</script>

<style lang="less" scoped>
    .content {
        width: 900px;
        height: 200px;

        /deep/ .el-slider {
            .el-slider__button-wrapper::before {
                content: '测试';
            }
        }
    }

</style>
