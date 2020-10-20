<template>
    <div class="pagination-dot">
        <div class="dot" v-for="(item,index) in pageTotal" :key="index" :class="index == pageNo-1 ? 'active':' '"></div>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        pageNo: 1,
        pageTotal: 4
      }
    }

  }
</script>

<style lang="less" scoped>
    .pagination-dot {
        display: flex;

        .dot {
            margin-left: 6rem;
            margin-right: 6rem;
            width: 8rem;
            height: 8rem;
            background: rgba(255, 78, 91, 0.2);
            border-radius: 4rem;
        }

        .active {
            width: 30rem;
        }
    }
</style>
