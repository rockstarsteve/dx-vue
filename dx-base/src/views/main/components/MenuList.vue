<template>
    <div class="menu-list">
        <div class="menu-item" v-for="(item,index) in menuList" :key="index">
            <img :src="item.menuImg" class="menu-img" alt="">
            <div class="item-title">{{item.title}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MenuList",
    data() {
      return {
        menuList: [
          {
            menuImg: require('assets/images/main/menu/call.png'),
            menuActImg: require('assets/images/main/menu/call@act.png'),
            title: '顺呼'
          },
          {
            menuImg: require('assets/images/main/menu/recall.png'),
            menuActImg: require('assets/images/main/menu/recall@act.png'),
            title: '重呼'
          },
          {
            menuImg: require('assets/images/main/menu/call-center.png'),
            menuActImg: require('assets/images/main/menu/call-center@act.png'),
            title: '呼叫大堂'
          },
          {
            menuImg: require('assets/images/main/menu/stop.png'),
            menuActImg: require('assets/images/main/menu/stop@act.png'),
            title: '暂停服务'
          },
          {
            menuImg: require('assets/images/main/menu/find.png'),
            menuActImg: require('assets/images/main/menu/find@act.png'),
            title: '数据查询'
          },
          {
            menuImg: require('assets/images/main/menu/printing.png'),
            menuActImg: require('assets/images/main/menu/printing@act.png'),
            title: '单据打印'
          },
          {
            menuImg: require('assets/images/main/menu/evaluate.png'),
            menuActImg: require('assets/images/main/menu/evaluate@act.png'),
            title: '评价'
          },
          {
            menuImg: require('assets/images/main/menu/call-self.png'),
            menuActImg: require('assets/images/main/menu/call-self@act.png'),
            title: '自定义呼叫'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
    .menu-list {
        width: 590rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .menu-item {
            width: 280rem;
            height: 120rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 8rem 30rem 0 rgba(36, 18, 18, 0.04);
            border-radius: 20rem;
            display: flex;
            align-items: center;
            margin-bottom: 30rem;

            .menu-img {
                width: 56rem;
                height: 56rem;
                margin-left: 47rem;
            }

            .item-title {
                font-size: 24rem;
                font-family: PingFang;
                font-weight: 500;
                color: rgba(70, 65, 65, 1);
                line-height: 33rem;
                margin-left: 24rem;
            }
        }
    }
</style>
