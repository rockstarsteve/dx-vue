<template>
  <div>
    <headerbar></headerbar>

    <section style="height: calc(100vh - 61px);display: flex">

      <leftbar @collapse-change=collapseChange></leftbar>

      <article style="padding: 10px;box-sizing: border-box" :style="{width:'calc(100vw - ' + leftWith+ 'px)'}">

        <router-view></router-view>
      </article>
    </section>
  </div>
</template>

<script>
  import {headerbar, leftbar} from '@/components'

  export default {
    name: "main",
    components: {
      headerbar: headerbar,
      leftbar,
    },
    data() {
      return {
        leftWith: 201,

      };
    },
    methods: {
      collapseChange(val) {
        if (val) {
          this.leftWith = 65
        } else {
          this.leftWith = 201
        }
      }
    },
    // 测试下es6的语法
    mounted() {
      var p = new Promise((resolve, reject) => {
        setInterval(() => {
          resolve("ok")
        }, 2000)

      })
      p.then(result => {
        console.info(result)
      })
        .catch(e => {
          console.info(e)
        })
    }

  }
</script>

<style scoped>

</style>
