<template>
    <div class="customer-detail">
        <div class="title">客户详情</div>
        <div class="content">
            <div class="left">
                <div class="user-info-line info-line1">
                    <img :src="userImg" class="user-img" alt="">
                    <div class="left-img-right">
                        <div class="user-info">
                            <div class="info-name">王源</div>
                            <div class="info-gender-age">
                                <div class="gender">男</div>
                                <div class="vertical-line"></div>
                                <div class="age">26岁</div>
                            </div>
                        </div>
                        <div class="user-start">
                            <img :src="startImg" class="user-start-img" alt="">
                            <div class="start-level">5星级VIP</div>
                        </div>
                    </div>
                </div>
                <div class="user-info-line info-line2">
                    <div class="info-detail">
                        <img :src="phoneLogo" class="detail-img user-phone-img" alt="">
                        <div class="detail-text phone-num">15637288903</div>
                    </div>

                    <div class="info-detail">
                        <img :src="professionLogo" class="detail-img user-profession-img" alt="">
                        <div class="detail-text profession-num">金融</div>
                    </div>
                </div>

                <div class="user-info-line info-line3">
                    账户信息
                </div>

                <div class="user-info-line info-line4">
                    <div class="user-capital user-deposit">
                        <div class="user-capital-title">存款</div>
                        <div class="user-capital-num">38,4756.47</div>
                    </div>
                    <div class="user-capital user-loan">
                        <div class="user-capital-title">贷款</div>
                        <div class="user-capital-num user-loan-num">38,4756.47</div>
                    </div>
                </div>
            </div>

            <div class="right">
                <div class="right-title">业务开办种类：</div>
                <div class="tag-content">
                    <check-tag :text="'理财'"></check-tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                    <Tag :text="'MMP'"></Tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Tag from '@/components/tag/index'
  import CheckTag from '@/components/tag/CheckTag'

  export default {
    name: "ConsumerDetail",
    components: {
      Tag,CheckTag
    },
    data() {
      return {
        userImg: require('assets/images/main/user.jpg'),
        startImg: require('assets/images/main/start1.png'),
        phoneLogo: require('assets/images/main/phone-logo.png'),
        professionLogo: require('assets/images/main/profession-logo.png'),
      }
    }
  }
</script>

<style lang="less" scoped>
    .customer-detail {
        width: 948rem;

        .title {
            font-family: PingFang;
            font-size: 22rem;
            font-weight: 600;
            line-height: 30rem;
            color: rgba(70, 65, 65, 1);
        }

        .content {
            margin-top: 30rem;
            width: 948rem;
            height: 260rem;
            background: #FAFAFA;
            border-radius: 20rem;
            display: flex;

            .left {
                width: 500rem;
                padding-left: 20rem;
                padding-top: 25rem;

                .user-info-line {
                    display: flex;
                    align-items: center;
                }

                .info-line1 {

                    .user-img {
                        width: 60rem;
                        height: 60rem;
                        border-radius: 50%;
                    }

                    .left-img-right {
                        margin-left: 19rem;
                        display: flex;
                        flex-direction: column;
                        height: 56rem;
                        justify-content: space-between;

                        .user-info {
                            height: 28rem;
                            display: flex;
                            align-items: center;

                            .info-name {
                                font-size: 20rem;
                                color: rgba(70, 65, 65, 1);
                                font-weight: 600;
                                font-family: PingFang;
                            }

                            .info-gender-age {
                                margin-left: 9rem;
                                font-size: 12rem;
                                color: rgba(70, 65, 65, 1);
                                font-weight: 400;
                                display: flex;
                                align-items: center;
                                font-family: PingFang;

                                .vertical-line {
                                    height: 10rem;
                                    width: 1rem;
                                    background-color: rgba(70, 65, 65, 0.6);;
                                    margin-left: 5rem;
                                    margin-right: 5rem;
                                }
                            }
                        }

                        .user-start {
                            width: 79rem;
                            height: 18rem;
                            border-radius: 9rem;
                            background: linear-gradient(150deg, rgba(255, 78, 91, 1) 0%, rgba(255, 118, 99, 1) 100%);
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            &-img {
                                width: 12rem;
                                height: 12rem;
                            }

                            .start-level {
                                margin-left: 2rem;
                                font-size: 10rem;
                                font-family: PingFang;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 1);
                                line-height: 14rem;
                            }
                        }
                    }
                }

                .info-line2 {
                    margin-top: 22rem;

                    .info-detail {
                        display: flex;

                        .detail-text {
                            font-size: 14rem;
                            font-family: PingFang;
                            font-weight: 600;
                            color: rgba(70, 65, 65, 1);
                            line-height: 20rem;
                        }
                    }

                    .info-detail:nth-child(2) {
                        margin-left: 33rem;
                    }

                    .detail-img {
                        width: 16rem;
                        height: 16rem;
                    }
                }

                .info-line3 {
                    margin-top: 27rem;
                    font-size: 12rem;
                    font-family: PingFang;
                    font-weight: 500;
                    color: rgba(70, 65, 65, 1);
                    line-height: 17rem;
                }

                .info-line4 {
                    display: flex;
                    margin-top: 17rem;

                    .user-capital {
                        width: 250rem;

                        .user-capital-title {
                            font-size: 12rem;
                            font-family: PingFang;
                            font-weight: 400;
                            color: rgba(139, 134, 134, 1);
                            line-height: 17rem;
                        }

                        .user-capital-num {
                            margin-top: 5rem;
                            font-size: 22rem;
                            font-family: PingFang;
                            font-weight: 600;
                            color: rgba(70, 65, 65, 1);
                            line-height: 30rem;
                        }

                        .user-loan-num {
                            color: rgba(255, 78, 91, 1);
                        }
                    }
                }
            }

            .right {
                padding-top: 21rem;
                font-size: 14rem;
                font-family: PingFang;
                font-weight: 600;
                color: rgba(70, 65, 65, 1);
                line-height: 20rem;

                .right-title {
                    font-size: 14rem;
                    font-family: PingFang;
                    font-weight: 600;
                    color: rgba(70, 65, 65, 1);
                    line-height: 20rem;
                }

                .tag-content {
                    margin-top: 19rem;
                    width: 445rem;
                    height: 170rem;
                    overflow: hidden;

                    .tag-container{
                        margin-right: 24rem;
                        margin-bottom: 16rem;
                    }
                }
            }
        }
    }
</style>
