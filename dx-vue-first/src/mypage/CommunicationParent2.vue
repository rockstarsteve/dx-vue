<template>
  <div>
    <div>
      CommunicationParent2.vue
      <br/>
      <span>{{ mydata2 }}</span>
      <br/>
      <CommunicationChild2 @sendData="sendData"></CommunicationChild2>
    </div>
  </div>
</template>

<script>
  import CommunicationChild2 from './CommunicationChild2';

  export default {
    name: "CommunicationParent2",
    components: {
      CommunicationChild2,
    },
    data() {
      return {
        mydata: ''
      }
    },
    methods: {
      sendData: function (childValue) {
        // childValue就是子组件传过来的值
        this.mydata = childValue
      }
    },
    computed:{
      mydata2: function () {
        return this.mydata;
      }
    }

  }
</script>

<style scoped>

</style>
