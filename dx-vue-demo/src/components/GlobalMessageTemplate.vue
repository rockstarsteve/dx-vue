<template>
    <div>
        <div>
            父组件传来的的消息是：{{message}}<br/>
            父注解的数组数据是：
                <ol v-for="(str,index) in arrays" v-bind:key="index">
                    <li >{{str.text}}</li>
                </ol>
            <br/>
            <button @click="send(0.1)">
                Enlarge text
            </button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "GlobalMessageTemplate",
        //父组件向子组件传递值的对象
        props:{
            message: String,
            arrays: {
                text: String
            },

        },
        methods:{
            send(data){
                this.$emit('onEnlargeText', data);
            }
        }
    }
</script>

<style scoped>

</style>
