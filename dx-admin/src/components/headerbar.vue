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
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </header>
</template>

<script>
  export default {
    name: "headerbar"
  }
</script>

<style scoped>

</style>
