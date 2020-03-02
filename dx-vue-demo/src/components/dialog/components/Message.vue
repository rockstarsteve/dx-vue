<template>
    <div class="toast" v-show="toastShow">
        {{toastText}}
    </div>
</template>

<script>
    export default {
        name: "MyMessage",
        props:{
            toastShow: {
                type: Boolean,
                default: false
            },
            toastText: {
                type: String,
                default: ''
            }
        },
        methods: {
            toast(str) {
                let v = this
                v.toastText = str
                v.toastShow = true
                setTimeout(function () {
                    v.toastShow = false
                }, 1500)
            },
            show() {
                this.toast('请输入正确的内容')
            }
        }
    }
</script>

<style scoped>
    .toast {
        position: fixed;
        z-index: 2000;
        left: 50%;
        top: 60%;
        transition: all .5s;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        border-radius: 5px;
        color: #FFF;
        background: rgba(17, 17, 17, 0.7);
        height: 45px;
        line-height: 45px;
        padding: 0 15px;

    }
</style>

