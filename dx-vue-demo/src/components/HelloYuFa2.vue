<template>
    <div class="hello">
        <div id="example">
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>

        <input type="text" v-model="num"/>
        <div> {{num}}是否能被2整除：{{yesOrNo}}</div>

        <a :href="message">属性绑定超链接</a>


        <div v-bind:class="classObject">这个是个div</div>


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
                message: 'Hello',
                yesOrNo: "不能",
                num: 0
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            },
            //绑定属性
            classObject: function () {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal'
                }
            }
        },
        watch: {
            //监听输入的值
            num: function (newYesOrNo, oldYesOrNo) {
                console.log("上一次的输入值是：" + oldYesOrNo)
                return this.yesOrNo = newYesOrNo % 2 == 0 ? "能" : "不能"
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
