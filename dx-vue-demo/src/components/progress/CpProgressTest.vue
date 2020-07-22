<template>
    <cp-progress :percentage="progressnum" style="width:300px"></cp-progress>
</template>

<script>
  import CpProgress from './components/CpProgress'

  export default {
    name: "CpProgressTest",
    components: {
      CpProgress
    },
    data() {
      return {
        progressnum: 0
      }
    },
    mounted() {
      setInterval(() => {
        this.progressnum = this.progressnum + 0.5
      }, 1000)
    }
  }
</script>

<style scoped>

</style>
