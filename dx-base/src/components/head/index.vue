<template>
  <div class="container">
    123122
    <img :src="logoImg" alt="">
    <div class="date-time">
      <div class="date">
        {{date}}
      </div>
      <div class="week">
        {{week}}
      </div>
      <div class="time">
        {{time}}
      </div>
    </div>
  </div>
</template>

<script>

  import moment from 'moment'

  export default {
    name: "index",
    data() {
      return {
        logoImg: require("assets/images/head/logo.png"),
        date: moment().format('MMMM Do'),
        week: moment().format('dddd'),
        time: moment().format('a h:mm')
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    background-color: rebeccapurple;
    /*display: flex;*/
    /*justify-content: space-between;*/

    > img {

    }

    .date-time {
      color: #464141;
      .data {

      }

      .week {

      }

      .time {

      }
    }
  }
</style>
