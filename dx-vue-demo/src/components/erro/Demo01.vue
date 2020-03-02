<template>
    <div class="content">
        <div class="line">
            <div class="content-iten" v-for="(item,index) in dataList" :key="index">
                <div class="content-sep" v-for="(step,index) in item.content" :key="index">{{step}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Demo01",
        data() {
            return {
                dataList: [
                    {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    },
                    {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    }, {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    },
                    {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    }, {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    },
                    {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    }, {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    },
                    {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    }, {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    },
                    {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    }, {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    },
                    {
                        title: '第一步',
                        content: ['sadfasf', 'asdfasfd']
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .content {
        width: 700px;
        height: 400px;
        background-color: pink;
    }

    .line {
        height: 100px;
        width: 600px;
        white-space: nowrap;
        overflow-x: auto;
        background-color: #409EFF;
    }

    .content-iten {
        display: inline-block;
        margin-right: 10px;
        width: 100px;
        height: 100px;
        background-color: red;
    }
</style>
