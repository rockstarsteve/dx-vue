<template>
    <div class="content">
        mock请求的数据：{{listData}}
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Demo01",
    data() {
      return {
        listData: {}
      }
    },
    methods: {
      getList() {
        axios.post('/api/openApi/getList')
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              alert("错误" + error)
            });
      }
    },
    created() {
      this.getList();
    }
  }
</script>

<style scoped>

</style>
