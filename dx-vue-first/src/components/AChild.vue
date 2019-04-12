<template>
  <div class="aChild">
    <h2>aChild组件</h2>
    <button @click="sendMessage">传值</button>
  </div>
</template>

<script>
  import bus from '@/assets/eventBus'

  export default {
    name: "AChild",
    data(){
      return{
        arr: ["1","2","3"]
      }
    },
    methods: {
      sendMessage: function () {
        bus.$emit('userDefinedEvent', this.arr);
      }
    }

  }
</script>

<style scoped>

</style>
