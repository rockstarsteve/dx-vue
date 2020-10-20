<template>
    <div class="main-show">
        <div class="top">
            <img :src="cardImg" class="card-img" alt="">

            <div class="show-right">
                <div class="date">2020年5月29日 星期五</div>
                <div class="old-data">闰四月初七</div>
                <div class="able-disable">
                    <div class="item able">
                        <div class="head">宜</div>
                        <div class="text">凝神聚气</div>
                    </div>
                    <div class="item disable">
                        <div class="head">忌</div>
                        <div class="text">目空一切</div>
                    </div>
                </div>
                <div class="line-group">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>

                <div class="sentence">
                    <div class="sentence-text">
                        拥护一项非凡的事业并为之奋斗终生，这就是我对那些追求不朽之名的年轻人的忠告。
                    </div>
                    <div class="sentence-author">
                        ——柯蒂斯
                    </div>
                </div>
            </div>
        </div>
        <div class="center">
            感谢您在过去的365天内服务了<span>2000名</span>客户，获得<span>2000个</span>
            好评，您真棒！
        </div>
    </div>
</template>

<script>
  export default {
    name: "MainShow",
    data() {
      return {
        cardImg: require('assets/images/main/card-img.jpg'),
      }
    }
  }
</script>

<style lang="less" scoped>
    .main-show {
        .top {
            display: flex;
            justify-content: space-between;
            width: 920rem;

            .card-img {
                width: 400rem;
                height: 486rem;
            }

            .show-right {
                width: 451rem;

                .date {
                    width: 100%;
                    text-align: center;
                    font-size: 30rem;
                    font-family: PingFang;
                    font-weight: 600;
                    color: rgba(70, 65, 65, 1);
                    line-height: 42rem;
                }

                .old-data {
                    margin-top: 19rem;
                    width: 100%;
                    text-align: center;
                    font-size: 24rem;
                    font-family: PingFang;
                    font-weight: 400;
                    color: rgba(139, 134, 134, 1);
                    line-height: 33rem;
                }

                .able-disable {
                    margin-top: 87rem;
                    display: flex;
                    justify-content: space-between;

                    .item {
                        display: flex;
                        align-items: center;

                        .head {
                            width: 48rem;
                            height: 48rem;
                            background: rgba(255, 78, 91, 1);
                            border-radius: 50%;
                            font-family: STSongti;
                            line-height: 48rem;
                            text-align: center;
                            font-size: 27rem;
                            font-weight: 900;
                            color: rgba(255, 255, 255, 1);
                        }

                        .text {
                            font-size: 24rem;
                            font-family: PingFang;
                            font-weight: 600;
                            color: rgba(70, 65, 65, 1);
                        }
                    }
                }

                .line-group {
                    margin-top: 36rem;

                    .line {
                        width: 451rem;
                        border-bottom: 1rem dashed #8B8686;
                        margin-bottom: 2rem;
                    }
                }

                .sentence {
                    margin-top: 83rem;

                    .sentence-text {
                        font-size: 18rem;
                        font-family: PingFang;
                        font-weight: 400;
                        color: rgba(139, 134, 134, 1);
                        line-height: 25rem;
                    }

                    .sentence-author {
                        width: 100%;
                        text-align: right;
                        font-size: 18rem;
                        font-family: PingFang;
                        font-weight: 400;
                        color: rgba(139, 134, 134, 1);
                        line-height: 25rem;
                    }
                }
            }
        }

        .center {
            margin-top: 130rem;
            width: 950rem;
            text-align: center;
            font-family: PingFang;
            font-size: 23rem;
            color: #464141;

            > span {
                font-size: 29rem;
                color: #FF4E5B;
            }

        }
    }
</style>
