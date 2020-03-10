<template>
    <div class="content">
        <h1>动态组件</h1>
        <div class="demo">
            <button v-for="(tab,index) in tabs" v-bind:key="index" class="button"
                    v-bind:class="{ 'active': tab.path == currentPath }"
                    @click="currentPath = tab.path">
                {{ tab.name}}
            </button>
            <component v-bind:is="currentTabComponent" class="tab"></component>
            <hr/>
            <component v-bind:is="'posts'" class="tab2"></component>
        </div>
    </div>
</template>

<script>
    import Tempiv from './components/Div'
    import Tempiv2 from './components/Div2'

    export default {
        name: "component",
        components: {
            home: Tempiv,
            posts: Tempiv2,
            archive: Tempiv
        },
        data() {
            return {
                currentPath: 'posts',
                tabs: [
                    {name: '主页', path: 'home'},
                    {name: '列表', path: 'posts'},
                    {name: '文章', path: 'archive'}
                ]
            }
        },
        computed: {
            currentTabComponent: function () {
                // console.log("要打印的currentTabComponent日志是：" + this.currentTabComponent);
                console.log("要打印的currentTab日志是：" + this.currentTab)
                return this.currentPath
            }
        },

    }
</script>

<style scoped>

    .active {
        background-color: red;
    }


</style>
