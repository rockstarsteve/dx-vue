<template>
  <div>
    <div class="div1">
      <p>test</p>

      <button  @click="showChild">
        显示子页面
      </button>

      <communication-child
        v-if="flag"
        :aa='num'
      >
      </communication-child>
    </div>
  </div>
</template>

<script>
  import CommunicationChild from './CommunicationChild';

  export default {
    name: "CommunicationParent",
    data() {
      return {
        flag: false,
        num: 3,
      }
    },
    components: {
      "communication-child": CommunicationChild
    },
    methods: {
      showChild: function () {
        this.flag = true;
      }
    }
  }
</script>

<style scoped lang="sass">
  /* body{
     div{

     }
   }*/
</style>
