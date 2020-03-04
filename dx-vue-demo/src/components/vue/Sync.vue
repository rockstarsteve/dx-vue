<template>
    <div class="conten">
        <button @click="isShow=true">显示子组件</button>
        <show-hello :isShow.sync="isShow"></show-hello>
    </div>
</template>

<script>
    import ShowHello from './components/ShowHello'

    export default {
        name: "Sync",
        components: {
            ShowHello
        },
        data() {
            return {
                isShow: false
            }
        }
    }
</script>

<style scoped>

</style>
