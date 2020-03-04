<template>
    <!--在此处添加渲染的内容-->
    <div>
        <el-dialog :title="title" :visible.sync="visible">
            <slot name="contents"></slot>
            <div slot="footer" class="dialog-footer">
                <el-button @click="back">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    //将渲染的内容导出
    export default {
        props: {
            title: {//标题
                type: String,
                default: () => {
                    return '弹出层'
                }
            },
            dialogFormVisible: {
                type: Boolean,
                required: true
            }

        },
        data() {
            return {
                visible: false
            }
        },
        methods: {
            back() {
                this.visible = false;
            },
            submit() {
                this.$emit('submitBtn', true);
            }
        },
        watch: {
            'dialogFormVisible': function (newVal, oldVal) {
                this.visible = newVal;
            },
            'visible': function (newVal, oldVal) {
                this.$emit('backBtn', newVal);
            }
        },
    }
</script>

<style scoped>
    /**渲染内容的样式**/
</style>
