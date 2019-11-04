<template>
  <div id="app">

    <headerbar></headerbar>

    <section style="height: calc(100vh - 61px);display: flex">

      <leftbar @collapse-change=collapseChange></leftbar>

      <article style="padding: 10px;box-sizing: border-box" :style="{width:'calc(100vw - ' + leftWith+ 'px)'}">

        <showlist></showlist>
      </article>
    </section>
  </div>
</template>

<script>
  import {headerbar, leftbar} from '@/components'
  import {showlist} from "@/view";

  export default {
    name: 'App',
    components: {
      headerbar: headerbar,
      leftbar,
      showlist
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

<style>
  * {
    margin: 0px;
    padding: 0px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .cllapsebtn {
    color: #fff;
    position: absolute;
    bottom: 100px;
    cursor: pointer;
  }

  /*el-icon-platform-eleme*/
</style>
