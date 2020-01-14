<template>
    <header
            style="display: flex;background-color: #545c64;align-items: center;justify-content: space-between;padding: 0 20px">
        <div style="color: white;font-size: 20px">后台管理</div>

        <el-menu
                default-active="0"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="0" @click="goToRule('')" route="/">
                <i class="el-icon-menu"></i>
                <span slot="title">工作平台</span>
            </el-menu-item>
            <el-menu-item index="1" @click="goToRule('showlist')">列表展示</el-menu-item>
            <el-submenu index="2">
                <template slot="title">进进仓管理</template>
                <el-menu-item index="2-1" @click="goToRule('showGoods')">库存货物(未做完)</el-menu-item>
                <el-menu-item index="2-2" @click="goToRule('showOrder')">订单(未做完)</el-menu-item>
            </el-submenu>
        </el-menu>

        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#558ff2">
            <el-submenu index="1">
                <template slot="title">admin</template>
                <el-menu-item index="1-1">修改密码(无效)</el-menu-item>
                <el-menu-item index="1-2" @click="logout">退出登录</el-menu-item>
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
                }).then(() => {
                    //退出
                    sessionStorage.removeItem("loginUser");
                    this.$router.push("/login")
                })
            },
            goToRule(url) {
                this.$router.push({path: '/' + url})
            }
        }
    }
</script>

<style scoped>

</style>
