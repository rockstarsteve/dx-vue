<template>
    <div class="content">
        <el-button id="btn">测试的按钮</el-button>
    </div>
</template>

<script>
    import {getElement} from './components/ImportJs.js';
    export default {
        name: "ImportJs",
        data(){
            return{
                data: 'hello'
            }
        },
        methods:{
            getElement(){
                getElement(this.data,'btn')
            }
        },
        mounted(){
            this.getElement()
        }
    }
</script>

<style scoped>

</style>
