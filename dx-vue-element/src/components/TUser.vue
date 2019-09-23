<template>
  <div>
    测试一下{{itemList}}
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "app",
    data() {
      return {
        itemList: []
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('/api/getData').then(response => {
          console.log(response.data);
          this.itemList = response.data;
        }, response => {
          console.log("error");
        });
      }
    }
  }
</script>

<style scoped>

</style>
