<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in listData" :key="item.title">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{item.title}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text">无效的操作按钮</el-button>
                    </div>
                    {{item.count}}
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                listData: [
                    {
                        title: "昨日增加人数",
                        count: "44"
                    },
                    {
                        title: "阅读数",
                        count: "23,444"
                    }
                ]
            }
        },
        // created() {
        //     this.$post("/showList/getCont").then(res => {
        //         this.listData = res.data.data
        //     })
        //
        // }
    }
</script>

<style scoped>

</style>
