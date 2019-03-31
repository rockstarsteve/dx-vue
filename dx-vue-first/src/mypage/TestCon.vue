<template>
  <div>
    hello{{ num1 }}
    <div>
      {{ info }}
      <hr/>
      {{ info2 }}
    </div>
    <br>
    <div>
      <button @click="login()">login</button>
      <button @click="getOrgList()">获取数据</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "",
    data() {
      return {
        info: '',
        info2: '',
        num1: '2'
      }
    },
    methods: {
      getOrgList: function () {
        axios
          .get('/XXX.do')
          .then(response => (this.info2 = response))
      },
      login: function () {
        axios
          .get('/XXX?XXXX=xxx')
          .then(response => (this.info = response))
      }
    },
  }
</script>

<style scoped>

</style>
