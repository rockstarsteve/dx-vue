<template>
    <div id="app">
        异步更新（异步聚焦未出现dom的）：

        <input ref="input" v-show="inputShow">
        <button @click="show">show</button>
    </div>
</template>

<script>
    export default {
        name: "nextTick",
        data() {
            return {
                inputShow: false
            }
        },
        methods: {
            show() {
                this.inputShow = true
                this.$nextTick(() => {
                    this.$refs.input.focus()
                })
            }
        }
    }
</script>

<style scoped>

</style>
