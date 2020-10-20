<template>
    <div class="tag-container">
        <slot name="before"></slot>
        <div class="tag-text">{{text}}</div>
        <slot name="after"></slot>
    </div>
</template>

<script>
  export default {
    name: "index",
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
    .tag-container {
        height: 30rem;
        padding: 6rem 12rem;
        background: rgba(243, 241, 241, 1);
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 19rem;

        .tag-text {
            font-size: 13rem;
            font-family: 'PingFang';
            font-weight: 400;
            color: rgba(139, 134, 134, 1);
            line-height: 18rem;
        }
    }
</style>
