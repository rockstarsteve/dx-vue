<template>
  <div class="container">
    数据是：{{this.showString}}
  </div>
</template>

<script>
  // js
  import NumberUtil from './NumberUtil.js'

  let numUtil = new NumberUtil()
  export default {
    name: "Es6Test",
    data() {
      return {
        showString: ''
      }
    },
    created() {
      this.showString = numUtil.add(1)
    }
  }
</script>

<style scoped>

</style>
