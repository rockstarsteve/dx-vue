<template>
    <div class="container">
        <ValidationObserver v-slot="{ passes }">
            <form class="form" @submit.prevent="passes(submit)">
                <img :src="logoImg" class="logo-img" alt="">
                <img :src="logoBg" class="logo-bg-img" alt="">

                <div class="form-title">智能化呼叫平台</div>
                <div class="form-input">
                    <name-input class="name-input-first" :title="'本机IP地址'" :name="'localIp'" :placeholder="'自动识别'"
                                :validate="'required'" v-model="localIp"/>
                    <name-input :title="'服务器IP地址'" :name="'serveIp'" :placeholder="'请手动输入'" :validate="'required'"
                                v-model="serveIp"/>
                </div>

                <button class="set-btn">保存</button>

                <div class="set-paramter">
                    <div @click="goBack()" class="">
                        <span>返回登陆</span>
                        <img :src="paremerSet" alt="">
                    </div>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
  import NameInput from './components/NameInput'
  import {ValidationObserver} from 'vee-validate';

  export default {
    name: "ParamerSet",
    components: {
      NameInput, ValidationObserver
    },
    data() {
      return {
        logoImg: require('assets/images/login/logo.png'),
        logoBg: require('assets/images/login/login-bg.png'),
        paremerSet: require('assets/images/login/right.png'),
        localIp: '',
        serveIp: '',
        isPopupVisible: false
      }
    },
    methods: {
      showPopup() {
        this.isPopupVisible = true
      },
      closePopup() {
        this.isPopupVisible = false
      },
      goBack() {
        this.$router.go(-1)
      },
      submit(event) {

        this.$toast("密码错误");

        console.log("提交。。。")
      }
    }
  }
</script>

<style lang="less" scoped>
    .container {
        height: 100vh;
        background: rgba(250, 250, 250, 1);
        position: relative;

        .form {
            width: 700rem;
            height: 760rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 8rem 33rem 0 rgba(0, 0, 0, 0.03), 0 10rem 147rem 0 rgba(36, 18, 18, 0.04);
            border-radius: 40rem;
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            padding-top: 118rem;
            padding-left: 100rem;
            padding-right: 100rem;

            .logo-img {
                width: 150rem;
                height: 45rem;
                position: absolute;
                left: 53rem;
                top: 40rem;
            }

            .logo-bg-img {
                width: 299rem;
                height: 299rem;
                position: absolute;
                right: 0;
                bottom: 0;
                z-index: -1;
            }

            .form-title {
                width: 100%;
                text-align: center;
                font-size: 40rem;
                color: rgba(70, 65, 65, 1);
                line-height: 48rem;
            }

            .form-input .name-input:first-child {
                margin-top: 80rem;
            }

            .form-input .name-input:last-child {
                margin-bottom: 90rem;
            }

            .set-btn {
                width: 100%;
                height: 64rem;
                border-radius: 13rem;
                font-size: 26rem;
                background-color: #FF4E5B;
                color: rgba(255, 255, 255, 1);
            }

            .name-input {
                margin-bottom: 34rem;
            }

            .set-paramter {
                display: flex;
                justify-content: center;
                font-family: PingFang;
                color: #FF4E5B;
                font-size: 20rem;
                margin-top: 45rem;
                align-items: center;
            }

            & img {
                margin-left: 11rem;
                width: 18rem;
                height: 18rem;
            }
        }
    }
</style>
