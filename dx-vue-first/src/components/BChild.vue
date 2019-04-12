<template>
  <div class="secondChild">
    <h2>secondchild组件</h2>
    <p>从第一个来的数据是： {{msg}}</p>
  </div>
</template>

<script>
  import bus from '@/assets/eventBus'

  export default {
    data() {
      return {
        msg: "将被替换"
      }
    },
    mounted() {
      bus.$on('userDefinedEvent', (msg) => {
        this.msg = msg
      })
    }

  }
</script>

<style scoped>

</style>
