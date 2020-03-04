

<template><!--在此处添加渲染的内容-->
    <div>
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <base-prop :dialogFormVisible="dialogFormVisible" :title="title" @backBtn="back" @submitBtn="submitBtn">
            //这种是简写方式，也可以写成v-slot:contents，还可以使用作用域
            <template #contents>
                <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </template>
        </base-prop>
    </div>
</template>

<script type="text/ecmascript-6">
    import BaseProp from './components/BaseProp.vue'
    //将渲染的内容导出
    export default{
        props: {},
        data(){
            return {
                dialogFormVisible: false,
                title: '测试',
                form: {
                    name: '',
                    region: ''
                },
                formLabelWidth: '120px'
            }
        },
        methods: {
            submitBtn(obj){
                console.log(this.form);
                console.log(obj);
            },
            back(b){
                this.dialogFormVisible = b;
            }
        },
        components: {BaseProp},
        computed: {},
        watch: {},
        created(){
        },
        mounted(){
        },

    }
</script>

<style scoped>
    /**渲染内容的样式**/
</style>
