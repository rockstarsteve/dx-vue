<template>
    <el-dialog custom-class="dialog-container" :visible.sync="innerDialogVisible" :before-close="handleClose"
               :modal-append-to-body="false" :close-on-click-modal="false">

        <el-image :src="buildingImage" class="building"></el-image>
        <el-image :src="colseImage" class="close" @click.native="closeDialog"></el-image>
    </el-dialog>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: {
            dialogVisibleFlag: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                colseImage: require('@/assets/close.png'),
                innerDialogVisible: false,

                buildingImage: require('@/assets/dialog-show.png')
            };
        },
        methods: {
            closeDialog() {
                this.closeDialogSignal();
                this.innerDialogVisible = false;
            },
            handleClose() {
                this.closeDialogSignal();
            },
            closeDialogSignal() {
                this.$emit('closeDialogHandle');
            }
        },
        mounted() {
        },
        watch: {
            dialogVisibleFlag: function (newValue, oldValue) {
                this.innerDialogVisible = true;
            }
        }
    };
</script>

<style lang="less" scoped>
    /deep/ .dialog-container {
        /*width: 1600px;*/
        /*height: 1348px;*/

        .el-dialog__header {
            display: none;
        }

        .el-dialog__body {
            width: 1380px;
            background-color: red;

            /*margin-top: 600px;*/
            /*height: 100%;*/
            display: flex;
            /*flex-direction: column;*/
            /*align-items: center;*/
            /*position: relative;*/

            .close {
                width: 127px;
                height: 127px;
            }

            .building {
                width: 1180px;
                height: 1348px;
            }
        }
    }
</style>
