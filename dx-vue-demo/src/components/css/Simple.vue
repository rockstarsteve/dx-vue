<template>
  <div class="content">
    <div class="line">
      111sadfasfdasfasfsafsafdsafsafd
      111sadfasfdasfasfsafsafdsafsafd
      111sadfasfdasfasfsafsafdsafsafd
      111sadfasfdasfasfsafsafdsafsafd
      111sadfasfdasfasfsafsafdsafsafd
      111sadfasfdasfasfsafsafdsafsafd
      111sadfasfdasfasfsafsafdsafsafd
    </div>
  </div>
</template>

<script>
  export default {
    name: "Simple"
  }
</script>

<style lang="less" scoped>
  // 显示行数，超过部分省略号显示
  .lineMore(@lineNo: 1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: @lineNo;
    line-clamp: @lineNo;
    word-break: break-all;
  }


  .content {
    .line {
      background-color: palegoldenrod;
      width: 100px;
        .lineMore(4);
    }
  }


</style>
