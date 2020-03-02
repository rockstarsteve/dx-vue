/**
第三方组件
数字键盘
*/
<template>
    <div id="content">
        键盘demo：
        <input
                ref="keybordInput"
                :value="input"
                class="input"
                @input="onInputChange"
                placeholder="请输入电话号码"
                @focus="inputFocus()"
        >
        <button @click="setFoucus">设置上焦点</button>
        <SimpleKeyboard ref="keybord" @closeBox="closeBox" v-if="showFlag" @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
    </div>
</template>

<script>
    // import SimpleKeyboard from "./components/SimpleKeyboard";
    import SimpleKeyboard from "./components/SimpleKeyboard";

    export default {
        name: "Demo01",
        components: {
            SimpleKeyboard
        },
        data: () => ({
            input: "",
            showFlag: false
        }),
        methods: {
            setFoucus() {
                this.$refs.keybordInput.focus()
            },
            onChange(input) {
                this.input = input;
            },
            onKeyPress(button) {
            },
            onInputChange(input) {
                this.input = input.target.value;
            },
            closeBox(){
                this.showFlag = false
            },
            inputFocus() {
                this.showFlag = true
            },
        }
    }
</script>

<style scoped>
    #content {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .simple-keyboard {
        max-width: 850px;
    }
</style>
