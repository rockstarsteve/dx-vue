<template>
    <div class="container">
        <ValidationObserver v-slot="{ passes }" tag="div">
            <form class="form" @submit.prevent="passes(submit)">
                <img :src="logoImg" class="logo-img" alt="">
                <img :src="logoBg" class="logo-bg-img" alt="">

                <div class="form-title">智能化呼叫平台</div>

                <name-input class="name-input-first" :title="'网点编号*'" :name="'officeNo'" :placeholder="'请输入具体网点编号'"
                            :validate="'required'" v-model="officeNo"/>
                <name-input :title="'柜员号*'" :name="'ServeNo'" :placeholder="'请输入您的柜员号'"
                            :validate="'required|minmax:2,20'" v-model="ServeNo"/>
                <name-input class="name-input-last" :title="'密码*'" :name="'password'" :placeholder="'请输入您的密码'"
                            :passwordType="passwordType" ref="password" :validate="'required'" v-model="password">
                <span class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
                </span>
                </name-input>

                <button type="submit" class="login-btn">登录</button>

                <div class="set-paramter">
                    <div @click="goSetParamer()" class="">
                        <span>参数设置</span>
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
    name: "login",
    components: {
      NameInput, ValidationObserver
    },
    data() {
      return {
        logoImg: require('assets/images/login/logo.png'),
        logoBg: require('assets/images/login/login-bg.png'),
        paremerSet: require('assets/images/login/right.png'),
        passwordType: 'password',
        officeNo: '',
        ServeNo: '',
        password: '',
      }
    },
    methods: {
      submit() {
        console.log("提交。。。")
        this.$router.push({path: 'main'})
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = 'text'
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.$el.getElementsByClassName("input-in")[0].focus
        })
      },
      goSetParamer() {
        this.$router.push({path: 'paramer-set'})
      }
    },
    mounted() {

    },
  }
</script>

<style lang="less" scoped>
    .container {
        height: 100vh;
        background: rgba(250, 250, 250, 1);
        position: relative;

        .form {
            width: 700rem;
            height: 820rem;
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

            .name-input {
                margin-bottom: 34rem;
            }

            .name-input-first {
                margin-top: 60rem;
            }

            .name-input-last {
                margin-bottom: 67rem;
            }

            .show-pwd {
                position: absolute;
                width: 20rem;
                height: 15rem;
                bottom: 10rem;
                right: 20rem;
            }

            .svg-icon {
                width: 20rem;
                height: 15rem;
            }

            .login-btn {
                width: 100%;
                height: 64rem;
                border-radius: 13rem;
                font-size: 26rem;
                background-color: #FF4E5B;
                color: rgba(255, 255, 255, 1);
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
