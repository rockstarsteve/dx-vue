/**
自定义数字键盘的
*/
<template>
    <div>
        <input type="text" v-model="text1"/>
        <br/>
        <input type="text" v-model="text2" id="mykeyboard" class="keyboard" ref="mykey"/>

        <input type="file"/>
        <numberKeyBoard @remove="remove" @setVar="setVar" :classkey="'keyboard'"></numberKeyBoard>
    </div>
</template>
<script>
    import numberKeyBoard from "./components/keyboard002";

    export default {
        components: {
            numberKeyBoard
        },
        data() {
            return {
                classkey: 'keyboard',
                text1: '',
                text2: ''
            };
        },
        methods: {
            remove() {
                if (this.text2.length > 0) {
                    this.text2 = this.text2.substring(0, this.text2.length - 1)
                }
            },
            setVar(innerText) {
                this.text2 = innerText
            }
        },

    };
</script>
<style scoped>
</style>
