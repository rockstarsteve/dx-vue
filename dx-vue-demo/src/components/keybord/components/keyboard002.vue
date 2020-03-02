<template>
    <div class="NumberkeyBoard" ref="NumberkeyBoard" :style="NumberkeyBoardStyle">
        <div class="keyBoard" @mousedown="BoardNumberKeyDown($event)" @click="BoardNumberClick($event)">
            <div v-html="number" class="numberTD" v-for="(number,index) in keyNumberArr" :key="index">
                {{number}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            classkey: String,
        },
        data() {
            return {
                keyNumberArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "&#8592;"],
                NumberkeyBoardStyle: "display:none",
                inputTarget: null
            };
        },
        mounted() {
            let $this = this;
            let inputElement = document.getElementsByClassName(this.classkey);
            [...inputElement].forEach(ipele => {
                ipele.addEventListener("focus", function (e) {
                    $this.inputTarget = e.target;
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
                    $this.NumberkeyBoardStyle =
                        "top:" + (e.target.getBoundingClientRect().top + scrollTop + e.target.offsetHeight) + "px;" +
                        "left:" + (e.target.getBoundingClientRect().left + scrollLeft + e.target.offsetWidth) + "px";
                });
                ipele.addEventListener("blur", function (e) {
                    $this.inputTarget = null;
                    $this.NumberkeyBoardStyle = "display:none";
                });
            });
        },
        methods: {
            //阻止input失去焦点
            BoardNumberKeyDown(e) {
                if (e && e.preventDefault) {
                    e.preventDefault();
                } else {
                    window.event.returnValue = false;
                    return false;
                }
            },
            BoardNumberClick(e) {
                let inputTarget = this.inputTarget;
                let Pointstart = inputTarget.selectionStart;
                let PointEnd = inputTarget.selectionEnd;
                let wordLength = inputTarget.value.length;
                if (e.target.className == "numberTD" && e.target.innerText != "←") {
                    inputTarget.value = inputTarget.value.slice(0, Pointstart) + e.target.innerText + inputTarget.value.slice(PointEnd, wordLength);
                    //一个小数点和开头不能有小数点
                    inputTarget.value = inputTarget.value.replace(/^\./g, "");
                    inputTarget.value = inputTarget.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                    inputTarget.selectionStart = Pointstart + 1;
                    inputTarget.selectionEnd = Pointstart + 1;
                    // 设置值
                    this.$emit('setVar', inputTarget.value);
                    //让光标显示在input可视区域
                    inputTarget.blur();
                    inputTarget.focus();
                } else if (
                    e.target.className == "numberTD" &&
                    e.target.innerText == "←" &&
                    //PointEnd==0时会复制整个input的value
                    PointEnd != 0
                ) {
                    inputTarget.value = inputTarget.value.slice(0, Pointstart - 1) + inputTarget.value.slice(PointEnd, wordLength);
                    inputTarget.selectionStart = Pointstart - 1;
                    inputTarget.selectionEnd = Pointstart - 1;
                    this.$emit('remove');
                    //让光标显示在input可视区域
                    inputTarget.blur();
                    inputTarget.focus();
                }
            }
        }
    };
</script>
<style lang="less">
    @num: 2;
    .NumberkeyBoard {
        position: fixed;
        width: 165px * @num;
    }

    .keyBoard {
        width: 165px * @num;
        background: gainsboro;
    }

    .numberTD {
        display: inline-block;
        width: 43px * @num;
        height: 35px * @num;
        color: #fff;
        line-height: 35px * @num;
        text-align: center;
        background: cross-fade();
        border: 1px solid #6f6e6f;
        box-shadow: 0px 0px 2px * @num 2px * @num #fff;
        margin: 5px * @num;
        cursor: pointer;

        &:hover {
            background: fixed;
        }

        &:active {
            transform: scale(0.8 * @num);
        }
    }
</style>

