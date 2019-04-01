<template>
  <div>
    <div class="class01">
      CommunicationChild2.vue
      <button @click="viewBusiness">获取</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: "CommunicationChild2",
    data() {
      return {
        msg: '子组件的数据：hello'
      }
    },
    methods: {
      //新订单页面跳转
      viewBusiness: function () {
        let flag = false;
        this.$emit('sendData', this.msg);
      }
    }
  }
</script>

<style scoped>
  .class01{
    background-color: #deffd5;
  }

</style>
