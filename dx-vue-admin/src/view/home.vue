<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in listData" :key="item.title">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{item.title}}</span>
                        <el-button style="float: right; padding: 3px 0" @click="goToDetail()" type="text">查看列表</el-button>
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
                        title: "昨日进库数",
                        count: "44",
                        name: ""
                    },
                    {
                        title: "总数量",
                        count: "23,444",
                        name: ""
                    }
                ]
            }
        },
        methods: {
            goToDetail(){
                this.$router.push("/showList")
            }
        }
    }
</script>

<style scoped>

</style>
