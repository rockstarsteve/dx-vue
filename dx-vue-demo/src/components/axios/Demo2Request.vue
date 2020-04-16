<template>
  <div class="content">
    等3分钟获取结果是{{resultData}}<br/>
    <button @click="postData">获取数据</button>
  </div>
</template>

<script>
  // js
  import axios from 'axios'

  export default {
    name: "Demo2Request",
    data() {
      return {
        resultData: null
      }
    },
    methods: {
      /**
       * 预获取结果
       */
      getDataPre(uuid) {
        axios.get(`http://localhost:8083/api/user/getDataPre/${uuid}`)
            .then((response) => {
              console.log("要打印的第一次获取数据的日志   " + response)
            })
            .catch((error) => {
              console.log("要打印的第一次获取数据的日志   " + error)
            });
      },
      /**
       * 获取结果
       */
      getData(uuid) {
        axios.get(`http://localhost:8083/api/user/getData/${uuid}`)
            .then((response) => {
              console.log(response);
              alert("请求成功" + response)
            })
            .catch((error) => {
              console.log(error);
              alert("错误" + error)
            });

      },
      postData() {
        let uuid = '11111'
        this.getDataPre(uuid)
        setTimeout(() => {
          this.getData(uuid)
        }, 1000 * 60 * 3 + 3000)
      }
    }
  }
</script>

<style scoped>

</style>
