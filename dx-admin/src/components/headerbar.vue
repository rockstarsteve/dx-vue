<template>
  <header
    style="display: flex;background-color: #545c64;align-items: center;justify-content: space-between;padding: 0 20px">
    <div style="color: white;font-size: 20px">后台管理</div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#558ff2">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">admin</template>
        <el-menu-item index="2-1">修改密码</el-menu-item>
        <el-menu-item index="2-2" @click="logout">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </header>
</template>

<script>
  export default {
    name: "headerbar",
    methods: {
      logout: function () {
        this.$confirm("确定退出？", "系统提示", {
          confirmButtonText: "确定",
          cancelButtonClass: "取消",
          type: "warning"
        }).then(()=>{
          this.$router.push("/login")
        })
      }
    }
  }
</script>

<style scoped>

</style>
