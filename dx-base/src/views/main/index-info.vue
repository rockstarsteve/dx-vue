<template>
    <div class="container">
        <div class="left">
            <img :src="logoImg" class="logo-img" alt="">
            <customer-detail></customer-detail>
            <div class="center-line-group">
                <div class="center-line"></div>
                <div class="center-line"></div>
            </div>
            <recommend-wealth class="recommend-wealth"></recommend-wealth>
        </div>
        <div class="right">
            <div class="right-head">
                <div class="head-left">
                    <img :src="callLogoImg" class="call-logo" alt="">
                    <div class="call-title">智能化呼叫平台备份</div>
                </div>
                <div class="head-right">
                    <img :src="currUserImg" class="curr-user" alt="">
                    <div class="curr-name">张仪</div>
                    <button class="logout" @click="logout">退出</button>
                </div>
            </div>

            <menu-list class="menu-list"></menu-list>

            <div class="data-show">
                <div class="data-item">
                    <div class="item-tile">当前网点</div>
                    <div class="item-text">科技园支行</div>
                </div>
                <div class="data-item">
                    <div class="item-tile">当前柜员</div>
                    <div class="item-text">37595898</div>
                </div>
                <div class="data-item">
                    <div class="item-tile">个人客户</div>
                    <div class="item-text">3048位</div>
                </div>
                <div class="data-item">
                    <div class="item-tile">对公客户</div>
                    <div class="item-text">3794位</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CustomerDetail from './components/CustomerDetail'
  import RecommendWealth from './components/RecommendWealth'
  import MenuList from './components/MenuList'

  export default {
    name: "index",
    components: {
      CustomerDetail, RecommendWealth, MenuList
    },
    data() {
      return {
        logoImg: require('assets/images/login/logo.png'),
        callLogoImg: require('assets/images/main/call-logo.png'),
        currUserImg: require('assets/images/main/user.jpg'),
      }
    },
    methods:{
      logout(){
        this.$router.push({path: '/login'})
      }
    }
  }
</script>

<style lang="less" scoped>
    .container {
        height: 100vh;
        width: 100%;
        background: rgba(250, 250, 250, 1);
        position: relative;
        display: flex;

        .left {
            width: 1140rem;
            height: 100%;
            box-shadow: 8rem 2rem 61rem 0rem rgba(0, 0, 0, 0.04);
            position: relative;
            padding-top: 148rem;
            padding-left: 100rem;
            background: rgba(255, 255, 255, 1);

            .logo-img {
                width: 150rem;
                height: 50rem;
                position: absolute;
                top: 34rem;
                left: 70rem;
            }

            .center-line {
                width: 955rem;
                border-bottom: 1rem dashed #D5D5D5;
            }

            .center-line-group > .center-line:first-child {
                margin-top: 40rem;
            }

            .center-line-group > .center-line:nth-child(2) {
                margin-top: 5rem;
            }

            .recommend-wealth {
                margin-top: 34rem;
            }
        }

        .right {
            width: 780rem;
            height: 100%;
            background: rgba(250, 250, 250, 1);
            padding-top: 39rem;
            padding-left: 80rem;

            .right-head {
                width: 650rem;
                display: flex;
                justify-content: space-between;

                .head-left {
                    display: flex;
                    align-items: center;

                    .call-logo {
                        width: 48rem;
                        height: 48rem;
                    }

                    .call-title {
                        margin-left: 16rem;
                        font-size: 30rem;
                        font-family: PingFang;
                        font-weight: 600;
                        color: rgba(70, 65, 65, 1);
                        line-height: 42rem;
                    }
                }

                .head-right {
                    display: flex;
                    align-items: center;

                    .curr-user {
                        width: 40rem;
                        height: 40rem;
                        border: 2rem solid rgba(255, 78, 91, 0.43);
                        border-radius: 50%;
                    }

                    .curr-name {
                        margin-left: 12rem;
                        font-size: 18rem;
                        font-family: PingFang;
                        font-weight: 500;
                        color: rgba(70, 65, 65, 1);
                        line-height: 25rem;
                    }

                    .logout {
                        margin-left: 24rem;
                        background: none;
                        width: 60rem;
                        height: 40rem;
                        border-radius: 8rem;
                        border: 1rem solid rgba(255, 78, 91, 1);
                        font-size: 16rem;
                        font-family: PingFang;
                        font-weight: 400;
                        color: rgba(255, 78, 91, 1);
                        line-height: 22rem;
                    }
                }
            }

            .menu-list {
                margin-top: 142rem;
            }

            .data-show {
                margin-top: 70rem;
                width: 590rem;
                height: 110rem;
                background: rgba(255, 255, 255, 1);
                border-radius: 17rem;
                padding-left: 45rem;
                padding-right: 38rem;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .data-item {
                    width: 110rem;

                    .item-tile {
                        font-size: 14rem;
                        font-family: PingFang;
                        font-weight: 500;
                        color: rgba(183, 176, 176, 1);
                        line-height: 20rem;
                    }

                    .item-text {
                        margin-top: 8rem;
                        font-size: 18rem;
                        font-family: PingFang;
                        font-weight: 500;
                        color: rgba(70, 65, 65, 1);
                        line-height: 25rem;
                    }
                }

            }
        }
    }
</style>
