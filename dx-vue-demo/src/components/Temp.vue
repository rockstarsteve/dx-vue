<template>
  <div class="container">
    数据是：{{datas}}

  </div>
</template>

<script>
  import Temp from './Temp'

  let temp = new Temp()

  import {DateUtil} from '@/util/StringUtil.js'

  export default {
    name: "Temp",
    data() {
      return {
        datas: null
      }
    },
    methods: {
      greet: function (event) {
      }
    },
    created() {
      // let mydate = new Date("2018-2-3 1:1:1")
      let mydate = new Date(222222222233)
      this.datas = DateUtil.getFormatText(mydate)
    }
  }
</script>

<style scoped>

</style>
