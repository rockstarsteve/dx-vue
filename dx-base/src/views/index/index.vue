<template>
    <div class="container">
        <Heads></Heads>
        <ul class="count-num-list">
            <li>123</li>
            <li>121</li>
            <li>121</li>
            <li>121</li>
        </ul>

        <ul class="count-day-list">
            <li>123</li>
            <li>121</li>
        </ul>

        <div class="chart-list">

        </div>


    </div>
</template>

<script>

  import Heads from './components/heads'

  export default {
    name: "index",
    components: {Heads},
    comments: {
      Heads
    }
  }
</script>

<style lang="less" scoped>
    .container {
        background: rgba(250, 250, 250, 1);
        padding-top: 37rem;
        padding-left: 70rem;
        padding-right: 70rem;
        height: 100vh;

        .count-num-list {
            margin-top: 23rem;
            display: flex;
            justify-content: space-between;

            & > li {
                height: 160rem;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 80rem 30rem 0 rgba(36, 18, 18, 0.04);
                border-radius: 20rem;
            }

            & > li:nth-child(1) {
                width: 480rem;
            }

            & > li:nth-child(2) {
                width: 480rem;
            }

            & > li:nth-child(3) {
                width: 350rem;
            }

            & > li:nth-child(4) {
                width: 350rem;
            }
        }

        .count-day-list {
            display: flex;
            justify-content: space-between;
            margin-top: 40rem;

            & > li {
                height: 330rem;
                background: rgba(255, 255, 255, 1);
                box-shadow: 0 8rem 30rem 0rem rgba(36, 18, 18, 0.04);
                border-radius: 20rem;
            }

            & > li:nth-child(1) {
                width: 750rem;
            }

            & > li:nth-child(2) {
                width: 990rem;
            }

        }

        .chart-list {
            margin-top: 37rem;
            width: 1780rem;
            height: 330rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 8rem 30rem 0 rgba(36, 18, 18, 0.04);
            border-radius: 20rem;
        }

    }
</style>
