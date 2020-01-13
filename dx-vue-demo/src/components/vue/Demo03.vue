<template>
    <div class="hello">

<!--        监听输入值-->
        <div v-show="show">
            <h1>please input request data🙊</h1>
        </div>
        <div v-show="!show">
            <h1 v-if="awesome">Vue is awesome!👍✌</h1>
            <h1 v-else>Oh no 😢</h1>
        </div>
        How was Vue: yes or no<input v-model="input"/>


        <hr/>


        {{num}}
        <ol v-for="(str,index) in strList" :key="index">
            <li>{{str}},,index:{{index}}</li>
        </ol>

        <button @click="insertData">添加数据中的数据</button>
        <button @click="delteData">修改数组的长度</button>


    </div>
</template>

<script>
    /**
     * 计算属性和侦听器
     */
    export default {
        name: 'HelloYuFa2',
        data() {
            return {
                show: false,
                awesome: false,
                input: 'no',
                num: 7,
                strList: [1,2,3,4]
            }
        },
        watch: {
            //监听输入的值
            input: function (newInput) {
                if (newInput=='yes'){
                    this.awesome = true;
                    this.show = false;
                } else if((newInput=='no')){
                    this.awesome = false;
                    this.show = false;
                }else {
                    this.show = true;
                }
            }
        },
        methods:{
            insertData(){
                this.num++;
                this.strList.push(this.num);
            },
            delteData(){
                //vue不能监听都js数组的变化，只有当再次使用js数组时候才能通知到
                this.strList.length = 2;
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
