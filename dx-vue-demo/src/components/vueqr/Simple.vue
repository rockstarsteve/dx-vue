<template>
    <div class="content">
        <vue-qr :logoSrc="imageUrl" text="http://www.baidu.com" :size="200"></vue-qr>
    </div>
</template>

<script>
    import vueQr from 'vue-qr'

    export default {
        name: "Demo01",
        data() {
            return {
                imageUrl: require("@/assets/logo.png"),
            }
        },
        components: {
            vueQr
        },
    }
</script>

<style scoped>

</style>
