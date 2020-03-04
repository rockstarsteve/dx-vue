<template>
    <div class="content" v-if="isShow">
        hello ,i am child
        <button @click="close">关闭</button>
    </div>
</template>

<script>
    export default {
        name: "ShowHello",
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close() {
                this.$emit('update:isShow', false)
            }
        }
    }
</script>

<style scoped>

</style>
