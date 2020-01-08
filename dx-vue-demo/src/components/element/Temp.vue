<template>
    <div class="content">
        hello world
        <el-image :src="src" fit="cover">
            你好啊
        </el-image>
    </div>

</template>

<script>
    // import MyDialog from './component/Dialog2.vue'

    export default {
        name: "Temp",
        components: {
            // MyDialog
        },
        data() {
            return {
                src: require('@/assets/dialog-show.png'),
            }
        },
    }
</script>

<style scoped>

</style>
