<template>
  <div class="content">
    <div class="title">
      以下是产品的介绍
    </div>
    <div class="content no-print">
      当前时间：2020-12-21
    </div>
    <div class="table-div">
      <section ref="printTest" id="printTest">
        <table class="table-goods" cellspacing="0" border="0" style="border-collapse:collapse">
          <tr class="goos-line">
            <td class="goos-cell">产品名称:</td>
            <td class="goos-cell">12312313</td>
            <td class="goos-cell">产品代码:</td>
            <td class="goos-cell">12312313</td>
          </tr>
          <tr class="goos-line">
            <td class="goos-cell">起购金额:</td>
            <td class="goos-cell">12312313万</td>
            <td class="goos-cell">产品经理:</td>
            <td class="goos-cell">12312313</td>
          </tr>
          <tr class="goos-line">
            <td class="goos-cell">风险等级:</td>
            <td class="goos-cell">12312313</td>
            <td class="goos-cell">是否热销:</td>
            <td class="goos-cell">12312313</td>
          </tr>
          <tr class="goos-line">
            <td class="goos-cell">月收益:</td>
            <td class="goos-cell">12312313</td>
            <td class="goos-cell">年收益:</td>
            <td class="goos-cell">12312313</td>
          </tr>
          <tr class="goos-line">
            <td class="goos-cell">日收益:</td>
            <td class="goos-cell">12312313%</td>
            <td class="goos-cell">业绩比较基准:</td>
            <td class="goos-cell">12312313%</td>
          </tr>
          <tr class="goos-line">
            <td class="goos-cell">发售日期:</td>
            <td class="goos-cell">12312313</td>
            <td class="goos-cell">到期日期:</td>
            <td class="goos-cell">12312313</td>
          </tr>
          <tr class="goos-line">
            <td class="goos-cell">期限:</td>
            <td class="goos-cell">12312313</td>
            <td class="goos-cell">是否已购:</td>
            <td class="goos-cell">12312313</td>
          </tr>
        </table>
        <div class="no-print" @click="pirntDiv">不要打印我</div>
      </section>
    </div>
    <el-button type="primary"  v-print="'#printTest'">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      image: require('@/assets/logo.png')
    }
  },
  methods: {
    pirntDiv() {
      console.log("====>")
      this.$print(this.$refs.printTest) // 使用
    }
  }
}
</script>

<style lang="less" scoped>

.table-div{
  width: 400px;
  height: 600px;
}

.table-goods {
  width: 100%;

  .goos-line {
    .goos-cell {
      padding-left: 10px;
      height: 40px;
      border: 2px solid black;
    }
  }
}

.goos-cell {
  border: 2px solid;
}

</style>
