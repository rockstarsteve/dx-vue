<template>
  <div class="container">
    测试
    <!--    <button @click="goBack">goBack</button>-->
    <div class="test" v-add:name="addName">

    </div>
  </div>
</template>

<script>
  export default {
    name: "Temp",
    data() {
      return {
        addName: '123'
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
