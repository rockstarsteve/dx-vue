<template>
  <div id="app">

    <headerbar></headerbar>

    <section style="height: calc(100vh - 61px);display: flex">

      <leftbar @collapse-change=collapseChange></leftbar>

      <article style="padding: 10px;box-sizing: border-box" :style="{width:'calc(100vw - ' + leftWith+ 'px)'}">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 10px 0px">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="tableData" border style="width: 100%;margin: 20px 0px">
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址" width="180"></el-table-column>
          <el-table-column label="日期" width="250">
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
      </article>
    </section>
  </div>
</template>

<script>
  import {headerbar, leftbar} from '@/components'
  export default {
    name: 'App',
    components: {
      headerbar: headerbar,
      leftbar
    },
    data() {
      return {
        leftWith: 201,
        tableData: []
      };
    },
    created(){
      this.getShowList()
    },
    methods: {
      collapseChange(val){
        if (val) {
          this.leftWith = 65
        } else {
          this.leftWith = 201
        }
      },
      handleEdit(i, j) {
        console.info(i, j)
      },
      handleDelete(i, j) {
        console.info(i, j)
      },
      fomatDate(format) {
        format = format + ''
        return this.$formatTime(format.substring(0, format.length - 3), 'Y/M/D h:m:s');
      },
      getShowList() {
        this.$get("/vue/getData", {params: {}}).then(res => {
          this.tableData = res.data;
          console.info(res.data)
        });
      }
    },
    // 测试下es6的语法
    mounted() {
      var p = new Promise((resolve, reject) => {
        setInterval(() => {
          resolve("ok")
        }, 2000)

      })
      p.then(result => {
        console.info(result)
      })
        .catch(e => {
          console.info(e)
        })
    }
  }
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .cllapsebtn {
    color: #fff;
    position: absolute;
    bottom: 100px;
    cursor: pointer;
  }
  /*el-icon-platform-eleme*/
</style>
