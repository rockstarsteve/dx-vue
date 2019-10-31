<template>
  <div id="app">
    <header
      style="display: flex;background-color: #545c64;align-items: center;justify-content: space-between;padding: 0 20px">
      <div style="color: white;font-size: 20px">Blued后台</div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#558ff2">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </header>
    <section style="height: calc(100vh - 61px);display: flex">

      <i class="cllapsebtn" :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"
         @click="isCollapse=!isCollapse"></i>
      <nav style="background: #545c64">
        <!--        <h5>自定义颜色</h5>-->
        <el-menu
          :collapse="isCollapse"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#558ff2">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </nav>
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
  import vue from 'vue'
  export default {
    name: 'App',
    data() {
      return {
        leftWith: 201,
        isCollapse: false,
        tableData: []
      };
    },
    watch: {
      isCollapse(val) {
        if (val) {
          this.leftWith = 65
        } else {
          this.leftWith = 201
        }
      }
    },
    created() {
      this.getShowList();
    },
    methods: {

      handleEdit(i, j) {
        console.info(i, j)
      },
      handleDelete(i, j) {
        console.info(i, j)
      },

      fomatDate(format){
        format = format +''
        return this.$formatTime(format.substring(0,format.length-3),'Y/M/D h:m:s');
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
