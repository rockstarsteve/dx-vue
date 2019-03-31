<template>
  <div>
    <div>
      {{num1}}<br/>
      <h1>分开</h1>
      <div id="app">
        {{ info }}
      </div>
      <h1>分开</h1>
      <button @click="getToken()">获取数据</button>
      <div>
        {{ info2 }}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "MyApp3",
    data() {
      return {
        info: '',
        info2: '',
        num1: '2'
      }
    },
    methods: {
      getToken: function () {
        axios
          .get('http://localhost:8081/renren-fast/app/notToken')
          .then(response => (this.info2 = response))
      }
    },
    mounted() {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    }

  }
</script>

<style scoped>

</style>
