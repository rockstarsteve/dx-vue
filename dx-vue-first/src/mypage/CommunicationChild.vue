<template>
  <div>
    <div>

      我是子类,从父类中获取的值是：
      {{ getaa }}

    </div>
  </div>
</template>

<script>
  export default {
    name: "CommunicationChild",
    props: ['aa'],
    data() {
      return {
        getaa: this.aa
      }
    }
  }
</script>

<style scoped>

</style>
