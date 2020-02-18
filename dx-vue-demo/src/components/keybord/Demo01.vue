<template>
    <div id="content">
        <input
                :value="input"
                class="input"
                @input="onInputChange"
                placeholder="请输入电话号码"
        >
        <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
    </div>
</template>

<script>
    import SimpleKeyboard from "./components/SimpleKeyboard";

    export default {
        name: "Demo01",
        components: {
            SimpleKeyboard
        },
        data: () => ({
            input: ""
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
            }
        }
    }
</script>

<style scoped>
    #content {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /*input {*/
    /*    width: 100%;*/
    /*    height: 100px;*/
    /*    padding: 20px;*/
    /*    font-size: 20px;*/
    /*    border: none;*/
    /*    box-sizing: border-box;*/
    /*}*/

    .simple-keyboard {
        max-width: 850px;
    }
</style>
