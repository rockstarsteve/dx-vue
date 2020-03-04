<template>
    <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 插槽的使用
     */
    export default {
        name: "alertBox",
        created() {
            console.log("alertBox初始化请求后台")
        }

    }
</script>

<style scoped>

</style>
