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
        <SimpleKeyboard v-if="showFlag" @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
    </div>
</template>

<script>
    import SimpleKeyboard from "./components/SimpleKeyboard2";

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
