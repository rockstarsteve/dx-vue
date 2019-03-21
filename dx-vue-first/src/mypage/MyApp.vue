<template>
  <div>
    this is myapp  ssssss!!!
    <div>
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    name: "MyApp",
    store,
    data() {
      return {
        msg: store.state.count
      }
    }
  }
</script>

<style scoped>

</style>
