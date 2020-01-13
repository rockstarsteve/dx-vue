<template>
    <div class="content">
        <div>页面找不到</div>
        <el-button @click="goBackWorkSapce">返回工作台</el-button>
    </div>
</template>

<script>
    export default {
        name: "404",
        methods: {
            goBackWorkSapce() {
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>
