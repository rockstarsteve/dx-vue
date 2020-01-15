<template>
    <div class="main">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 10px 0px">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>列表展示</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button
                        type="primary"
                        icon="el-icon-plus"
                        size="mini"
                        @click="handleAdd"
                >新增
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-button
                        type="danger"
                        icon="el-icon-delete"
                        size="mini"
                        @click="handleDelete2()"
                >删除
                </el-button>
            </el-col>
            <el-col :span="1.5">
                <el-form  ref="queryForm" :inline="true" label-width="68px">
                    <el-form-item label="名称" prop="code">
                        <el-input
                                placeholder="请输入名称"
                                clearable
                                size="small"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
                        <el-button icon="el-icon-refresh" size="mini" >重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

        <el-table :data="tableData" ref="myTable" class="main-table"
                  border
                  row-style="height:0"
                  cell-style="padding:0"
                  highlight-current-row
                  @row-click="clickTableRow"
                  @row-contextmenu="rightClick"
        >
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
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
                            @click="handleEdit(scope.$index, scope.row)">详情
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>

        <div class="centerDiv"></div>

        <el-table :data="tableData2" ref="myTable2" class="main-table"
                  border
                  row-style="height:0"
                  cell-style="padding:0"
                  highlight-current-row
        >
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
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
                            @click="handleEdit(scope.$index, scope.row)">详情
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
            <el-table :data="gridData">
                <el-table-column property="name" label="姓名" width="100"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
                <el-table-column label="日期" width="350">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">
                        {{ fomatDate(scope.row.birthDay) }}
                      </span>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>


        <div id="menu">
            <div class="menu" v-for="(item,index) in menus" :key="index" @click.stop="infoClick(index)">{{item}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "showlist",
        data() {
            return {
                gridData: [],
                radio: null,
                dialogTableVisible: false,
                tableData: [
                    {
                        "id": "03",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "04",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "04",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360719
                    },
                    {
                        "id": "05",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "06",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "07",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "08",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360719
                    },
                    {
                        "id": "08",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "09",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "10",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    }
                ],
                tableData2: [
                    {
                        "id": "03",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "04",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "04",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360719
                    },
                    {
                        "id": "05",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "06",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "07",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "08",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360719
                    },
                    {
                        "id": "08",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "09",
                        "name": "tom",
                        "nick": "tom001",
                        "address": "湖南",
                        "birthDay": 1577983360720
                    },
                    {
                        "id": "10",
                        "name": "tom2",
                        "nick": "tom002",
                        "address": "湖北",
                        "birthDay": 1577983360720
                    }
                ],
                current: 1,
                cuurrentFlag: 0,
                cuurrentFlag2: 0,
                menus: ['详细信息', '方案分析', '方案存库', '清除方案'],
                currentRowIndex: 0, // 获取当前右键点击的table行下标
            }
        },
        created() {
            document.addEventListener('keydown', this.listenKey);
        },
        beforeDestroy() {
            document.removeEventListener('keydown', this.listenKey);
        },
        methods: {
            handleDelete2(){
                alert("删除")
            },
            handleAdd(){
              alert("新增")
            },
            listenKey(evt) {
                let _this = this;
                evt = (evt) ? evt : ((window.event) ? window.event : "");//兼容IE和Firefox获得keyBoardEvent对象
                let _key = evt.keyCode ? evt.keyCode : evt.which;//兼容IE和Firefox获得keyBoardEvent对象的键值

                console.log("监听你按下的键是：" + _key)

                // 上键处理
                if (_key === 38) {

                    if (this.current == 1) {
                        //up
                        this.cuurrentFlag = this.cuurrentFlag - 1
                        if (this.cuurrentFlag < 0) {
                            this.cuurrentFlag = this.tableData.length - 1
                        }
                        this.$refs.myTable.setCurrentRow(this.tableData[this.cuurrentFlag]);
                    }else {
                        //up
                        this.cuurrentFlag2 = this.cuurrentFlag2 - 1
                        if (this.cuurrentFlag2 < 0) {
                            this.cuurrentFlag2 = this.tableData.length - 1
                        }
                        this.$refs.myTable2.setCurrentRow(this.tableData2[this.cuurrentFlag2]);
                    }


                }
                // 下键处理
                if (_key === 40) {
                    //down
                    if (this.current == 1) {
                        this.cuurrentFlag = this.cuurrentFlag + 1
                        if (this.cuurrentFlag >= (this.tableData.length)) {
                            this.cuurrentFlag = 0
                        }
                        this.$refs.myTable.setCurrentRow(this.tableData[this.cuurrentFlag]);
                    }else {
                        this.cuurrentFlag2 = this.cuurrentFlag2 + 1
                        if (this.cuurrentFlag2 >= (this.tableData2.length)) {
                            this.cuurrentFlag2 = 0
                        }
                        this.$refs.myTable2.setCurrentRow(this.tableData2[this.cuurrentFlag2]);
                    }
                }

                // 回车键处理
                if (_key === 13) {
                    //down
                    if (this.current == 1) {
                        if (this.dialogTableVisible) {
                            this.dialogTableVisible = false
                        } else {
                            this.handleEdit(this.cuurrentFlag, this.tableData[this.cuurrentFlag])
                        }
                    }else {
                        if (this.dialogTableVisible2) {
                            this.dialogTableVisible2 = false
                        } else {
                            this.handleEdit(this.cuurrentFlag2, this.tableData2[this.cuurrentFlag2])
                        }
                    }

                }

                // 回车键处理
                if (_key === 9) {
                    console.log("tab")
                    if (this.current == 1){
                        this.current = 2
                        // document.getElementById('myTable2').focus()
                        // this.$refs.myTable2.focus()
                        document.getElementsByTagName("input").blur();
                        // $("input").blur();
                    } else {
                        this.current = 1
                        // document.getElementById('myTable').focus()
                        // this.$refs.myTable.focus()
                        document.getElementsByTagName("input").blur();
                    }
                }

            },
            /**
             *
             * @param i
             * @param j
             */
            handleEdit(i, j) {
                this.gridData = []
                let temp = new Object()
                this.gridData.push(j)

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

            // 自定义菜单的点击事件
            infoClick(index) {
                this.$alert('当前table的下标为' + this.currentRowIndex + ' , /n  你可以在这里做你想做的事情',
                    '你点击了自定义菜单的 " ' + this.menus[index] + ' "功能!!!', {
                        confirmButtonText: '确定',
                        callback: action => {
                            var menu = document.querySelector("#menu");
                            menu.style.display = 'none';
                        }
                    });
            },
            // table的左键点击当前行事件
            clickTableRow(row, column, event) {
                var menu = document.querySelector("#menu");
                menu.style.display = 'none';
                console.log(row, column, event)
                this.tableData.forEach((item, index) => {
                    if (row.id === item.id) {
                        this.radio = index;
                        // 切换选中行
                        this.cuurrentFlag = index
                        this.$refs.myTable.setCurrentRow(this.tableData[index]);
                    }
                })


            },
            // table的右键点击当前行事件
            rightClick(row, column, event) {
                var menu = document.querySelector("#menu");
                event.preventDefault();
                //获取我们自定义的右键菜单


                // 根据事件对象中鼠标点击的位置，进行定位
                menu.style.left = event.clientX + 'px';
                menu.style.top = event.clientY + 'px';
                // 改变自定义菜单的隐藏与显示
                menu.style.display = 'block';
                console.log(row, column);
                // 获取当前右键点击table下标
                this.tableData.forEach((item, index) => {
                    if (item.name === row.name) {
                        this.currentRowIndex = index;
                        return false;
                    }
                })
            },

        },
    }
</script>

<style lang="scss" scoped>

    .main{
        .el-form-item{
            margin-bottom: 0px !important;
        }
        .centerDiv{
            height: 100px;
            width: 100%;
            border: 2px solid blue;
        }
    }

    #menu {
        width: 120px;
        height: 100px;
        overflow: hidden; /*隐藏溢出的元素*/
        box-shadow: 0 1px 1px #888, 1px 0 1px #ccc;
        position: absolute;
        display: none;
        background: #ffffff;
        z-index: 10;
    }

    .menu {
        width: 125px;
        height: 25px;
        line-height: 25px;
        text-indent: 10px;
        cursor: pointer;
    }

    .menu:hover {
        color: deeppink;
        text-decoration: underline;
    }

</style>
