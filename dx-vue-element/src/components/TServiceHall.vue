<template>
  <div id="app">
    <div v-for="item in itemList">
      <span>{{item.name}}</span>
      <span>{{item.nick}}</span>
    </div>
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
        axios.get('http://localhost:8080/api/getData').then(response => {
          console.log(response.data);

          this.itemList =response.data.first;
        }, response => {
          console.log("error");
        });
      }
    }
  }
</script>
