<template>
    <div id="content">
        键盘demo：
        <input
                :value="input"
                class="input"
                @input="onInputChange"
                placeholder="请输入电话号码"
                @focus="inputFocus()"
        >
        <SimpleKeyboard v-show="showFlag" @closeBox="closeBox" @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
    </div>
</template>

<script>
    import SimpleKeyboard from "./components/SimpleKeyboard3";

    export default {
        name: "Demo03",
        components: {
            SimpleKeyboard
        },
        data: () => ({
            input: "",
            showFlag: false
        }),
        methods: {
            onChange(input) {
                this.input = input;
            },
            onKeyPress(button) {
                console.log("button", button);
            },
            onInputChange(input) {
                this.input = input.target.value;
            },
            inputFocus() {
                this.showFlag = true
            },
            closeBox(){
                this.showFlag = false
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
