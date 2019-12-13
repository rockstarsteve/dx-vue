<template>
    <div class="hello">

        <div v-for="(data,index) in childData" v-bind:key="index">
            <global-message-template
                    :message="data.message"
                    :arrays="data.todos"
                    :style="{ fontSize: postFontSize + 'em' }"
                    v-on:onEnlargeText="onEnlargeText"/>
        </div>

        <div v-if="true">
            <h1>{{ msg }}</h1>
        </div>

        <!--        元素绑定事件-->
        <span :title="message1">
            鼠标悬停几秒钟查看此处动态绑定的提示信息！1
        </span>

        <!--        元素绑定事件-->
        <span v-bind:title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>

        <!--        if-->
        <div id="app-3">
            <p v-if="seen">现在你看到我了</p>
        </div>

        <!--        for-->
        <div>
            <ol v-for="todo in todos" v-bind:key="todo.text">
                <li>{{todo.text}}</li>
            </ol>
        </div>

        <!--        vue消息事件监听-->
        <div id="app-5">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage" @keyup.enter="reverseMessage">逆转消息</button>
        </div>

        <!--        双向绑定测试-->
        <div id="app-6">
            <p>{{ message }}</p>
            <input v-model="message">
        </div>


        <!--    v-once只渲染元素和组件一次-->
        <span v-once>这个将不会改变: {{ message }}</span>

        <!--     v-html作为html解析  双大括号会将数据解释为普通文本，而非 HTML 代码-->
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>

        <!--        动态参数：v-bind属性和值的绑定-->
        <a v-bind:[attributeName]="url"> 跳转点击测试 </a>


    </div>
</template>

<script>
    /**
     * 模板语法
     */
    export default {
        name: 'HelloWorld',
        created() {
            console.info("初始化创建HelloWorld页面！")
        },
        //App组件通过 props 向HelloYuFa子组件传递数据
        props: {
            msg: String,
        },
        data() {
            return {
                postFontSize: 1,
                todos: [
                    {text: '学习 JavaScript'},
                    {text: '学习 Vue'},
                    {text: '整个牛项目'}
                ],
                childData: [{
                    message: "hello1",
                    todos: [
                        {text: '学习 c++'},
                        {text: '学习 c#'},
                        {text: '学习 java'}
                    ]
                },{
                    message: "hello2",
                    todos: [
                        {text: '学习 JavaScript'},
                        {text: '学习 Vue'},
                        {text: '整个牛项目'}
                    ]
                }],
                message1: "you ",
                message: '页面加载于 ' + new Date().toLocaleString(),
                seen: true,
                rawHtml: 'Using mustaches: <span style="color: red">This should be red.</span>',
                attributeName: 'href',
                url: 'http://www.baidu.com'
            }
        },
        methods: {
            /**
             * 把对message消息反转
             */
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            },
            /**
             * 处理子组件的信息
             * @param enlargeAmount 参数
             */
            onEnlargeText: function (enlargeAmount) {
                console.info("接受到子组件的参数是："+enlargeAmount)
                this.postFontSize += enlargeAmount
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
