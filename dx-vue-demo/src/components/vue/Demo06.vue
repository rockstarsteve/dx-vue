<template>

    <div class="content">
        <el-button @click="change">点击</el-button>
        <my-image :src="srcImage" :height="height" :width="width"/>
    </div>

</template>

<script>
    import MyImage from '../component/Image'

    export default {
        name: "HelloYuFa6",
        components: {
            MyImage
        },
        data() {
            return {
                height: 20,
                width: 20,
                srcImage: require('@/assets/dialog-show.png')
            }
        },
        methods: {
            change(){
                this.width = 50;
                this.height = 60

            }
        }
    }
</script>

<style scoped>

</style>
