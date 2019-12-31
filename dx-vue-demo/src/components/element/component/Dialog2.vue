<template>
    <div class="dialog">
        <div class="dialog_mask">
            <div class="dialog_content">
                <el-image :src="contentImage" class="content"></el-image>
                <el-image :src="close" class="close" @click="closeDialog"></el-image>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dialog2",
        props: {
            contentImage: String,
        },
        data(){
            return{
                close: require('@/assets/close.png'),
                innerDisplay:false
            }
        },
        methods: {
            closeDialog() {
                this.$emit("close");
            }
        },
    }
</script>

<style lang="less" scoped>
    .dialog {

        .dialog_mask {
            position: fixed;
            z-index: 200;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);

            .dialog_content {

                display: flex;
                align-items: flex-start;
                margin: 0 auto;
                margin-top: 357px;

                width: 1180px + 62 + 127;
                height: 1348px + 41;

                z-index: 300;
                .content {
                    width: 1180px;
                    height: 1348px;
                }
                .close{
                    left: 100px;
                    /*background-color: red;*/
                    width: 117px;
                    height: 117px;
                }
            }
        }
    }
</style>
