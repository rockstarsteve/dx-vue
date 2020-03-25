<template>
    <div class="content">
        <demo :src="asdfsaf"></demo>
    </div>
</template>

<script>
    import demo from './t-video'
    export default {
        name: "Demo01",
        componets:{
            demo
        },
        data(){
            return{
                asdfsaf: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
            }
        }
    }
</script>

<style scoped>

</style>
