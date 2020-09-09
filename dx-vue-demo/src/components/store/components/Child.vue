<template>
    <div class="content">
        数据是：{{getNum}}
        user中的数据是：{{users.age}}
    </div>
</template>

<script>
  import { mapState,mapGetters } from 'vuex'

  export default {
    name: "Child",
    computed: {
      ...mapGetters(['getNum']),
      ...mapState(['users'])
    }
  }
</script>

<style scoped>

</style>
