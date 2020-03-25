<template>
    <tabs v-model="active">
        <tab title="标签 1">内容 1</tab>
        <tab title="标签 2">内容 2</tab>
        <tab title="标签 3">内容 3</tab>
    </tabs>
</template>

<script>
    import Tabs from './components/Tabs'
    import Tab from './components/Tab'

    export default {
        name: "SimpleTabs",
        components: {
            Tab, Tabs
        },
        data() {
            return {
                active: 2
            };
        }
    }
</script>

<style scoped>

</style>
