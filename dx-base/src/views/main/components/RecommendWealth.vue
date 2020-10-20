<template>
    <div class="recommend-wealth">
        <div class="title">推荐理财产品</div>

        <div class="wealth-list">
            <div class="wealth-item" v-for="(item ,index) in wealthList" :key="index">
                <div class="right-tag">{{item.isBuy}}</div>
                <div class="title">{{item.titel}}</div>
                <div class="note">{{item.note}}</div>
                <div class="detail">
                    <div class="detail-info">
                        <div class="info-base item">
                            <div class="item-num">{{item.base}}</div>
                            <div class="item-text">业绩比较基准</div>
                        </div>
                        <div class="info-base-mony item">
                            <div class="item-num">{{item.baseMony}}</div>
                            <div class="item-text">起购金额</div>
                        </div>
                        <div class="info-tearm item">
                            <div class="item-num">{{item.tearm}}</div>
                            <div class="item-text">期限</div>
                        </div>
                    </div>
                    <button class="info-btn">查看详情</button>
                </div>
            </div>
        </div>

        <div class="page">
            <pagination-dot class="pagination-dot"></pagination-dot>
        </div>

    </div>
</template>

<script>
  import PaginationDot from "@/components/pagination/PaginationDot";

  export default {
    name: "RecommendWealth",
    components: {
      PaginationDot
    },
    data() {
      return {
        rightTag: require('assets/images/login/logo.png'),
        wealthList: [
          {
            isBuy: '已购',
            titel: '平安360天周期盈',
            note: '【精品主题】最近购买开放日: 2020-05-29',
            base: '3.47%',
            baseMony: '5万',
            tearm: '1个月',
          },
          {
            isBuy: '已购',
            titel: '平安360天周期盈',
            note: '【精品主题】最近购买开放日: 2020-05-29',
            base: '3.47%',
            baseMony: '5万',
            tearm: '1个月',
          },
          {
            isBuy: '已购',
            titel: '平安360天周期盈',
            note: '【精品主题】最近购买开放日: 2020-05-29',
            base: '3.47%',
            baseMony: '5万',
            tearm: '1个月',
          },
          {
            isBuy: '已购',
            titel: '平安360天周期盈',
            note: '【精品主题】最近购买开放日: 2020-05-29',
            base: '3.47%',
            baseMony: '5万',
            tearm: '1个月',
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
    .recommend-wealth {
        .title {
            font-size: 22rem;
            font-family: 'PingFang';
            font-weight: 600;
            color: rgba(70, 65, 65, 1);
            line-height: 30rem;
        }

        .wealth-list {
            margin-top: 29rem;
            width: 948rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .wealth-item {
                margin-bottom: 20rem;
                position: relative;
                width: 464rem;
                height: 179rem;
                background: rgba(250, 250, 250, 1);
                border-radius: 20rem;
                padding-top: 24rem;
                padding-left: 24rem;
                padding-right: 24rem;

                .right-tag {
                    width: 64rem;
                    height: 32rem;
                    line-height: 32rem;
                    text-align: center;
                    font-size: 14rem;
                    font-family: 'PingFang';
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                    position: absolute;
                    top: 0;
                    right: 0;
                    background-image: url('~assets/images/main/right-tag-bg.png');
                    background-size: 100% 100%;
                }

                .title {
                    font-size: 18rem;
                    font-family: 'PingFang';
                    font-weight: 500;
                    color: rgba(70, 65, 65, 1);
                    line-height: 25rem;
                }

                .note {
                    margin-top: 4rem;
                    display: inline-block;
                    background: linear-gradient(180deg, rgba(255, 78, 91, 0.1) 0%, rgba(234, 99, 80, 0.1) 100%);
                    height: 30rem;
                    line-height: 30rem;
                    padding-left: 7rem;
                    padding-right: 7rem;
                    font-size: 12rem;
                    font-family: 'PingFang';
                    font-weight: 400;
                    color: rgba(255, 78, 91, 1);
                }

                .detail {
                    margin-top: 17rem;
                    display: flex;
                    justify-content: space-between;

                    .detail-info {
                        display: flex;
                        justify-content: space-between;
                        width: 250rem;

                        .item {
                            display: flex;
                            flex-direction: column;

                            .item-num {
                                font-size: 22rem;
                                font-family: 'PingFang';
                                font-weight: 600;
                                color: rgba(255, 78, 91, 1);
                                line-height: 30rem;
                            }

                            .item-text {
                                margin-top: 8rem;
                                font-size: 12rem;
                                font-family: 'PingFang';
                                font-weight: 400;
                                color: rgba(70, 65, 65, 1);
                                line-height: 17rem;
                            }
                        }
                    }

                    .info-btn {
                        margin-top: 13rem;
                        width: 97rem;
                        height: 36rem;
                        background: none;
                        border: 1rem solid #FF4E5B;
                        font-size: 14rem;
                        font-family: 'PingFang';
                        font-weight: 500;
                        color: rgba(255, 78, 91, 1);
                        line-height: 20rem;
                    }
                }
            }
        }

        .page{
            width: 967rem;
            margin-top: 5rem;
            display: flex;
            justify-content: center;
        }
    }
</style>
