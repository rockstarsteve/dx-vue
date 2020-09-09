<template>
    <div class="content">
        test js
    </div>
</template>

<script>
  export default {
    name: "evnTest",
    created() {
      console.log("VUE_MY_APP_URL环境是:",process.env.VUE_MY_APP_URL)
      console.log("BASE_API_URL环境是:",process.env)
    }
  }
</script>

<style scoped>

</style>
