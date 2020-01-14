<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 700px"
                @row-click="clickTableRow"
                v-loading="loading"
                border
                highlight-current-row
                @row-contextmenu="rightClick"
        >
            <el-table-column label="选项" align width="150">
                <template slot-scope="scope">
                    <el-radio
                            v-model="radio"
                            :label=scope.$index
                    >备选项
                    </el-radio>
                </template>
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
        <div id="menu">
            <div class="menu" v-for="(item,index) in menus" :key="index" @click.stop="infoClick(index)">{{item}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                menus: ['详细信息', '方案分析', '方案存库', '清除方案'],
                radio: null,
                loading: true,
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎1',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎2',
                        address: '上海市普陀区金沙江路 1517 弄'
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎3',
                        address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎4',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }],
                currentRowIndex: 0, // 获取当前右键点击的table行下标
            }
        },
        methods: {
            // 自定义菜单的点击事件
            infoClick(index) {
                this.$alert('当前table的下标为' + this.currentRowIndex, '你点击了自定义菜单的' + this.menus[index] + '功能', {
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
                // console.log(row,column,event)
                this.tableData.forEach((item, index) => {
                    if (row.name === item.name) {
                        this.radio = index;
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
        mounted() {
            setTimeout(() => {
                this.loading = false;
            }, 2000)
        }
    }
</script>

<style scoped>
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
