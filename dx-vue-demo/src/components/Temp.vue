<template>
    <div class="container">

        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>

        now : {{now}}


        <div v-bind:style="styleObject">123</div>

    </div>
</template>

<script>
    export default {
        name: "Temp",
        data() {
            return {
                message: 'hello,world',
                num: 0,
                styleObject: {
                    color: 'red',
                    fontSize: '13px'
                }
            }
        },
        methods: {},
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            },
            now: function () {
                return Date.now()
            }
        },

        beforeCreate() {

            let a = new Object('asdf','yyyy')
            console.log("a:" + a)

            console.log("beforeCreate.....")
        },
        created() {
            console.log("created.....")
        },
        beforeMount() {
            console.log("beforeMount.....")
        },
        mounted() {
            console.log("mounted.....")
        },
        beforeUpdate() {
            console.log("beforeUpdate.....")
        },
        updated() {
            console.log("updated.....")
        },
        beforeDestroy() {
            console.log("beforeDestroy.....")
        },
        destroyed() {
            console.log("destroyed.....")
        }
    }
</script>

<style scoped>
    .bind-test {
        width: 100px;
        height: 100px;
        background-color: yellow;
    }

    .bind-test:active {
        width: 100px;
        height: 100px;
        background-color: pink;
    }

</style>
