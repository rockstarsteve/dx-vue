<template>
    <div class="hello">

        <div>
            <alert-box>
                Something bad happened.
            </alert-box>
        </div>

        <div>
            <div id="dynamic-component-demo" class="demo">
                <button v-for="tab in tabs" v-bind:key="tab.path"
                        v-bind:class="['tab-button', { active: currentTab === tab.path }]"
                        v-on:click="currentTab = tab.path">
                    {{ tab.name }}
                </button>

                <component :is="currentTabComponent" class="tab"></component>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * 使用插槽
     */
    import alertBox from '../component/alertBox'
    import tabHome from '../component/tabHome'
    import tabPosts from '../component/tabPosts'
    import tabArchive from '../component/tabArchive'

    export default {
        name: 'HelloYuFa5',
        components: {
            alertBox,
            home: tabHome,
            posts: tabPosts,
            archive: tabArchive
        },
        data() {
            return {
                currentTab: 'home',
                tabs: [{
                    name: '主页',
                    path: 'home'

                }, {
                    name: '帖子',
                    path: 'posts'
                }, {
                    name: '归档日志',
                    path: 'archive'
                }]
            }
        },
        computed:{
            currentTabComponent: function () {
                return this.currentTab
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background-color: #409EFF;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .tab-button:hover {
        background: #e0e0e0;
    }
    .tab-button.active {
        background: #e0e0e0;
    }
    .tab-button:focus{
        outline: none;
    }
    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>
