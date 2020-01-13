<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 10px 0px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>列表展示</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="tableData" border style="width: 100%;margin: 20px 0px"
        >
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="日期">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">
                {{ fomatDate(scope.row.birthDay) }}
              </span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-dialog title="用户详情" :visible.sync="dialogTableVisible">
            <el-table>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
                <el-table-column property="date" label="日期" width="150"></el-table-column>
            </el-table>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        name: "showlist",
        data() {
            return {
                radio: null,
                dialogTableVisible: false,
                tableData: []
            }
        },
        created() {
            this.getShowList()
        },
        methods: {
            handleEdit(i, j) {
                this.dialogTableVisible = true;
            },
            handleDelete(i, j) {
                console.info(i, j)
                this.$message({
                    type: 'success',
                    message: "删除成功"
                })
            },
            fomatDate(format) {
                format = format + ''
                return this.$formatTime(format.substring(0, format.length - 3), 'Y/M/D h:m:s');
            },
            getShowList() {
                this.$get("/vue/getData", {params: {}}).then(res => {
                    this.tableData = res.data.data;
                    console.info("shuju shi :" + res.data)
                });
            }
        },
    }
</script>

<style scoped>

</style>
