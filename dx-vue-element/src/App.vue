<template>
  <div id="app">
    <Test></Test>
    <TestTime></TestTime>
    <TestHide></TestHide>
    <TestMenu></TestMenu>
    <img src="./assets/logo.png">
    <div>
      <el-col :span="2">
        <el-menu
          :default-active="this.$route.path"
          router mode="horizontal"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span> {{ item.navItem }}</span>
            </template>

          </el-menu-item>


        </el-menu>
      </el-col>

      <router-view class="menu-right"/>

    </div>
  </div>
</template>

<script>
  import Test from './components/Test.vue'
  import TestTime from './components/TestTime.vue'
  import TestHide from './components/TestHide.vue'
  import TestMenu from './components/TestMenu.vue'

  export default {
    name: 'App',
    components: {
      Test,
      TestTime,
      TestHide,
      TestMenu
    },
    data() {
      return {
        navList: [
          {name: '/components/TServiceHall', navItem: '服务大厅'},
          {name: '/components/TManagement', navItem: '权限管理'},
          {name: '/components/TUser', navItem: '用户管理'},
          {name: '/components/TPersonnel', navItem: '人员数据'},
          {name: '/components/TAlarm', navItem: '报警中心'},
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .menu-right {
    margin-left: 200px;
  }

</style>
