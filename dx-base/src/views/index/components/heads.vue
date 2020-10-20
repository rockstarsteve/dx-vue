<template>
    <div class="heads">
        <img :src="logoImg" alt="">
        <div class="title">智能排队管理系统</div>
        <button>登录</button>
    </div>
</template>

<script>
  export default {
    name: "heads",
    data() {
      return {
        logoImg: require('assets/images/common/logo.png')
      }
    }
  }
</script>

<style lang="less" scoped>
    .heads {
        display: flex;
        justify-content: space-between;

        & > img {
            width: 173rem;
            height: 51rem;
        }

        .title {
            font-size: 36rem;
            font-family: PingFang;
            font-weight: 600;
            color: rgba(70, 65, 65, 1);
            line-height: 50rem;
        }

        & > button {
            font-size: 16rem;
            color: #ffffff;
            width: 80rem;
            height: 40rem;
            background: rgba(255, 78, 91, 1);
            border-radius: 8rem;
        }

    }
</style>
