<template>
    <div class="container">

        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>

        now : {{now}}


        <div v-bind:style="styleObject">123</div>

        <button v-on:click="greet">Greet</button>

    </div>
</template>

<script>
    export default {
        name: "Temp",
        data() {
            return {
                name: 'tom',
                message: 'hello,world',
                num: 0,
                styleObject: {
                    color: 'red',
                    fontSize: '13px'
                }
            }
        },
        methods: {
            greet: function (event) {
                // `this` 在方法里指向当前 Vue 实例
                alert('Hello ' + this.name + '!')
                // `event` 是原生 DOM 事件
                if (event) {
                    alert(event.target.tagName)
                }
            }
        },
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

            var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var arr2 = arr.filter(function (x) {
                return x >= 8;
            });
            console.log(arr2);//[1, 4, 7, 8, 9, 10]

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
