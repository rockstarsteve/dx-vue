<template>
    <div>
        <headerbar></headerbar>
        <section style="height: calc(100vh - 61px);display: flex">
            <article style="padding: 10px;box-sizing: border-box" :style="{width:'calc(100vw)'}">
                <router-view></router-view>
            </article>
        </section>
    </div>
</template>

<script>
    import {headerbar} from '@/view/components/index'

    export default {
        name: "mains",
        components: {
            headerbar: headerbar,
        },
    }
</script>

<style scoped>

</style>
