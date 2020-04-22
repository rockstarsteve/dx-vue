<template>
  <div class="content">
    测试页面
  </div>
</template>

<script>
  // 设置axios
  import axios from 'axios'

  const service = axios.create({
    timeout: 10000 // request timeout
  })

  export default {
    name: "Demo02",
    methods: {
      login() {
        this.getUser();
      },

      getUser() {
        let user = new FormData();
        user.append('password', 'xx')

        service.post('http://localhost:8083/api/user/getNullData', user, {headers: {'Content-type': 'application/x-www-form-urlencoded'}})
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error)
            });
      }
    },
    mounted() {
      this.getUser()
      this.$nextTick(()=>{
        console.log("要打印的日志   " + 1)
      })
    }
  }
</script>

<style scoped>

</style>
