<template>
  <div class="content">

    <label for="userinput">
      把这个 label 搞的很大很大，然后覆盖在你要点击的区域（整个页面）
    </label>
    请输入值
    <input type="text" name="val1" value="2"/>
    <input type="text" name="val2" value="2"/>
    <input type="text" ref="userinput" id="userinput" name="val3" value="2"/>
    <input type="text" name="val4" value="2"/>
    <input type="text"  name="val5" value="2"/>

  </div>
</template>

<script>
export default {
  name: "fockinput",
  mounted() {
    console.log(this.$refs.userinput.focus())
  }
}
</script>

<style scoped>

</style>
