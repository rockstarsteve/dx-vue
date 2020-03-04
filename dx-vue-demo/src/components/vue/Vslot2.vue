<template>
    <div class="content">
        这里是父组件：
        <vsolt2-child>
            <el-button>hello</el-button>
        </vsolt2-child>
    </div>
</template>

<script>
    import Vsolt2Child from './components/Vsolt2Child'

    export default {
        name: "Vsolt2",
        components: {
            Vsolt2Child
        },
        component: {
            Vsolt2Child
        }

    }
</script>

<style scoped>

</style>
