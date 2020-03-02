/**
第三方组件
数字键盘,修改了配置，见2标准的
*/
<template>
    <div :class="keyboardClass"></div>
</template>

<script>
    import Keyboard from "simple-keyboard";
    import "simple-keyboard/build/css/index.css";

    export default {
        name: "SimpleKeyboard",
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
                    default: ["1 2 3", "4 5 6", "7 8 9", "- 0 删除", "关闭"],
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
                 * If you want to handle the shift and caps lock buttons
                 */
                if (button === "删除") {
                    this.handleShift();
                }
                if (button === "关闭") {
                    this.$emit("closeBox",false)
                    console.log("ok");
                }
            },
            handleShift() {

            }
        },
        watch: {
            input(input) {
                this.keyboard.setInput(input);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
