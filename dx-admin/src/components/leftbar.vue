<template>
  <nav style="background: #545c64">
    <i class="cllapsebtn" :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"
       @click="isCollapse=!isCollapse"></i>
    <!--        <h5>自定义颜色</h5>-->
    <el-menu
      :collapse="isCollapse"
      :default-openeds="['1']"
      default-active="1-1"
      :unique-opened="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#558ff2">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">用户列表</el-menu-item>
          <el-menu-item index="1-2">封号列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">用户列表</el-menu-item>
          <el-menu-item index="2-2">封号列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </nav>
</template>

<script>
  export default {
    name: "left",
    data() {
      return {
        isCollapse: false,
      }
    },
    watch: {
      isCollapse(val) {
        this.$emit("collapse-change", val)
      }
    },
  }
</script>

<style scoped>

</style>
