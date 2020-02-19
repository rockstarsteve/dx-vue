<template>
    <div class="content">
        <div class="hot-jobs">
            <el-radio class="tagbtn" :label="3">备选项</el-radio>
            <el-radio class="tagbtn" :label="6">备选项</el-radio>
            <el-radio class="tagbtn" :label="9">备选项</el-radio>
        </div>
    </div>

</template>

<script>
    // import MyDialog from './component/Dialog2.vue'

    export default {
        name: "Temp",
        components: {
            // MyDialog
        },
        data() {
            return {
                src: require('@/assets/dialog-show.png'),
            }
        },
    }
</script>

<style scoped>
    .hot-jobs .tagbtn, .area-jobs .tagbtn {
        border-radius: 30px;
        margin: 0;
        margin-right: 5px;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, 0)
    }

    .tagbtn.is-bordered.is-checked, .area-jobs.is-bordered.is-checked {
        background: #4095f7;
    }

    .tagbtn .el-radio__input.is-checked .el-radio__inner, .area-jobs .el-radio__input.is-checked .el-radio__inner, .el-radio--mini.is-bordered .el-radio__inner {
        display: none !important;
    }

    .tagbtn .el-radio__input.is-checked + .el-radio__label, .area-jobs .el-radio__input.is-checked + .el-radio__label {
        color: #FFF;
    }

    .el-radio.is-bordered + .el-radio.is-bordered {
        margin-left: 0px;
    }

</style>
