<template>
    <div class="content">
        <child></child>
        <button @click="increse(5)">点击</button>
        <button @click="increseAge()">点击user</button>
    </div>
</template>

<script>
  import Child from "./components/Child";
  import {mapMutations} from 'vuex'

  export default {
    name: "Demo01",
    components: {
      Child
    },
    methods: {
      ...mapMutations({
        'increse': 'increse',
        'increseAge': 'users/increseAges'
      }),
    }
  }
</script>

<style scoped>

</style>
