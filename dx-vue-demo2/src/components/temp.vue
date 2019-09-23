<template>
  <div class="app">
    <header>
    </header>
    <div class="details">
      <div @click="memberRank">
        <span>卡类型</span>

        <span>{{name}}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>

    <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text="">

    </mt-actionsheet>
  </div>
</template>
<script>



  export default {
    data() {
      return {

        actions2: [],  //底部弹出提示框
        sheetVisible2: false,//透明遮罩背景
        name: "普卡"//默认数值
      };
    },
    computed: {

    },
    components: {

    },
    methods: {
      // 点击显示会员等级
      memberRank() {
        this.sheetVisible2 = true;
      },

      //赋值到框里
      commonCard() {
        this.name = "普卡";
      },
      silverCard() {
        this.name = "银卡";
      },
      goldCard() {
        this.name = "金卡";
      },


    },
    mounted() {//移动但底部弹出选项
      this.actions2 = [
        {
          name: "普卡",
          method: this.commonCard
        },
        {
          name: "银卡",
          method: this.silverCard
        },
        {
          name: "金卡",
          method: this.goldCard
        }
      ];
    }
  };
</script>
<style scoped>

  header {
    height: 1.5rem;
    width: 100%;
    background-image: linear-gradient(-134deg, #f62241 0%, #f62241 100%);
    position: relative;
  }


  .details {
    background: white;
    margin-top: 0.3rem;
    height: auto;
  }

  .details div span:nth-child(2):not(.phoneNum) {
    position: absolute;
    left: 4rem;
  }
  .details div {
    clear: both;
    border-bottom: 0.025rem solid rgba(0, 0, 0, 0.02);
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.48rem;
    color: rgba(0, 0, 0, 0.7);
    margin-left: 0.5rem;
  }
</style>
