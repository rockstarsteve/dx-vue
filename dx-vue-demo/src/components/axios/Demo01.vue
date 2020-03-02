<template>
    <div class="content">
        请求获取的用户名：{{users.userName}}
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "Demo01",
        data() {
            return {
                users: {userName: ''},
                userName: ''
            }
        },
        methods: {
            getUser() {
                axios.get('/api/user.json')
                    .then(function (response) {
                        console.log(response);
                        // this.userName = response.data.data.name
                        console.log("要打印的this日志是：" + this)
                        alert("请求成功" + response)
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("错误" + error)
                    });
            }
        },
        created() {
            this.getUser();
        }
    }
</script>

<style scoped>

</style>
