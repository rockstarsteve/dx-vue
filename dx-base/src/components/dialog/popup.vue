<template>
    <div class="popup-wrapper" v-show="visible" @click="hide">
        <div class="popup-text">{{text}}</div>
    </div>
</template>

<!--
使用方法:
<popup ref="popup" text="弹窗内容" :time="1e3"></popup>
this.$refs.popup.open()
-->

<script>
  export default {
    name: 'popup',
    props: {
      text: { //文字内容
        type: String,
        default: ''
      },
      time: { //显示的时长
        type: Number,
        default: 3e3
      },
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      open() {
        this.visible = true
        clearTimeout(this.timeout);
        this.$emit('show')
        if (this.time > 0) {
          this.timeout = setTimeout(() => {
            this.hide()
          }, this.time)
        }
      },
      hide() {
        this.visible = false
        this.$emit('hide')
        clearTimeout(this.timeout);
      }
    }
  }
</script>

<style lang="less" scoped>
    .popup-wrapper{
        position: fixed;
    }
</style>
