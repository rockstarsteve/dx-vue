<template>
    <Tag :text="text" class="tag-container active">
        <template v-slot:before>
            <img :src="labCheckImg" class="lab-check-img" alt="">
        </template>
    </Tag>
</template>

<script>
  import Tag from '@/components/tag/index'

  export default {
    name: "CheckTag",
    components: {
      Tag
    },
    props: {
      text: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        labCheckImg: require('assets/images/common/tag-check.png'),
      }
    }
  }
</script>

<style lang="less" scoped>
    .tag-container {
        margin-right: 24rem;
        margin-bottom: 16rem;
        background: linear-gradient(150deg, rgba(255, 78, 91, 1) 0%, rgba(255, 118, 99, 1) 100%);
        vertical-align: top;

        /deep/.tag-text {
            color: rgba(255, 255, 255, 1);
        }

        .lab-check-img {
            width: 20rem;
            height: 20rem;
            margin-right: 4rem;
        }
    }
</style>
