<template>
    <div :class="keyboardClass"></div>
</template>

<script>
    import Keyboard from "simple-keyboard";
    import "simple-keyboard/build/css/index.css";

    export default {
        name: "SimpleKeyboard2",
        props: {
            keyboardClass: {
                default: "simple-keyboard",
                type: String
            },
            input: {
                type: String
            }
        },
        data: () => ({
            keyboard: null
        }),
        mounted() {
            this.keyboard = new Keyboard({
                onChange: this.onChange,
                onKeyPress: this.onKeyPress,
                layout: {
                    default: ["1 2 3", "4 5 6", "7 8 9", "_ 0 {bksp}", "{close}"],
                },
                display: {
                    '{bksp}': '删除',
                    '{close}': '关闭',
                },
                theme: "hg-theme-default hg-layout-numeric numeric-theme"
            });
        },
        methods: {
            onChange(input) {
                this.$emit("onChange", input);
            },
            onKeyPress(button) {
                this.$emit("onKeyPress", button);

                /**
                 * 关闭
                 */
                if (button == "{close}" || button === "{lock}") this.handleShift();
            },
            handleShift() {
                this.$emit("closeBox", false)
            }
        },
        watch: {
            input(input) {
                console.log("设置值")
                this.keyboard.setInput(input);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
