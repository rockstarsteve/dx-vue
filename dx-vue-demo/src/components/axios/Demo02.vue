<template>
  <div class="content">
    请求获取的用户名
    <button @click="login">登录</button>
  </div>
</template>

<script>
  // 设置axios
  import axios from 'axios'
  const service = axios.create({
    timeout: 1000 // request timeout
  })

  export default {
    name: "Demo02",
    methods: {
      login(){
        this.getUser();
      },

      getUser() {
        let user = new FormData();
        user.append('username','xxx')
        user.append('password','xx')

        service.post('xxx', user,{headers:{'Content-type':'application/x-www-form-urlencoded'}})
            .then(function (response) {
              console.log(response.status);
            })
            .catch(function (error) {
              console.log(error);
            });
      }
    },
  }
</script>

<style scoped>

</style>
