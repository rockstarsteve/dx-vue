<!--
<template>
    <div class="wrap">
        <div class="top">
            <video
                    :style="videoStyle"
                    class="top-video"
                    ref="vo"
                    style="width:100%; height:100%; object-fit:fill"
                    autoplay
                    muted
                    loop
                    v-if="initVideo.url"
                    @timeupdate="videoTimeUpdate"
            >
                <source :src="initVideo.url" type="video/ogg" />
                <source :src="initVideo.url" type="video/mp4" />您的浏览器不支持 video 视屏播放。
            </video>
            <el-image class="top-video-exit" :src="exitImg" fit="fill" @click="exitFull" :style="exitStyle"></el-image>
            <div class="top-video-controls" ref="controls" :style="exitFixStyle">
                <el-image class="controls-stop" :src="initVideo.play?controlsStop:controlsPay" fit="fill" @click="stop"></el-image>
                <el-slider class="video-progress" :show-tooltip="false" v-model="initVideo.currentTime"
                           :max="initVideo.videoLength" @change="changeVideoTime">
                </el-slider>
                <el-image class="controls-sound" :src="initVideo.mute?controlsMute:controlsSound" fit="fill" @click="voice"></el-image>
&lt;!&ndash;                <div class="video-sound">&ndash;&gt;
&lt;!&ndash;                    <div class="soundBar"></div>&ndash;&gt;
&lt;!&ndash;                </div>&ndash;&gt;
            </div>
            <div class="top-title">
                工程造价咨询
            </div>
            <div class="top-learn-more" @click="fullScreen">
                了解更多
                <el-image :src="learnMoreImg" fit="fill"></el-image>
            </div>
            <div class="top-menu">
                <div class="menu-btn" @click="goPersonal">
                    <el-image :src="btn01Img" fit="fill"></el-image>
                    个人物业服务
                </div>
                <div class="menu-btn" @click="goEnterprise">
                    <el-image :src="btn02Img" fit="fill"></el-image>
                    企业物业服务
                </div>
            </div>
        </div>
        <div class="bottom">
        </div>
        <div class="main-container">
            <div class="container-left">

            </div>
            <div class="container-right">
                <div class="right-title">
                    建设银行是全国唯一一家获得住房和城乡建设部及中国人民银行批准开办造价咨询业务的银行
                </div>
                <div class="right-detail">
                    建设银行可为客户提供项目可行性研究、投资顾问、资金监管、概预结算、招标控制价及竣工决算编审等全过程造价咨询服务；
                    按照产品服务对象可分为个人物业服务和企业物业服务。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectCostConsultation",
        data(){
            return{
                //视频
                initVideo: {
                    play: false,//播放还是暂停 true播放中
                    mute: true,// 是否静音，true静音
                    videoLength: 0,//时长
                    url: require('@/assets/mp4/summer20190515.mp4'),//视频课件Url
                    currentTime: 0,//当前播放时间
                    lastTime: null,//标记时间戳
                    name: "测试的视频",
                },
                isFull: false,
                controlsStop: require('@/assets/images/houseBuild/projectCostConsultation/video-stop.png'),
                controlsSound: require('@/assets/images/houseBuild/projectCostConsultation/video-voice.png'),
                controlsPay: require('@/assets/images/houseBuild/projectCostConsultation/video-pay.png'),
                controlsMute: require('@/assets/images/houseBuild/projectCostConsultation/video-mute.png'),
                exitImg: require('@/assets/images/houseBuild/projectCostConsultation/exit-video.png'),
                learnMoreImg: require('@/assets/images/houseBuild/projectCostConsultation/play_btn.png'),
                btn01Img: require('@/assets/images/houseBuild/projectCostConsultation/btn01.png'),
                btn02Img: require('@/assets/images/houseBuild/projectCostConsultation/btn02.png')
            }
        },
        methods: {
            goPersonal(){
                //
                this.$router.push({name: 'personalServiceLib'})


            },
            goEnterprise(){
                //
                this.$router.push({name: 'enterpriseService'})
            },
            // 视频全屏
            fullScreen(){
                this.isFull = true
                this.initVideo.videoLength = this.$refs.vo.duration
            },
            // 退出全屏
            exitFull(){
                this.isFull = false
                this.initVideo.play = false
            },
            // 暂停键
            stop(){
                if (this.initVideo.play){
                    this.$refs.vo.play();
                    this.initVideo.play = false;
                }else {
                    this.$refs.vo.pause();
                    this.initVideo.play = true;
                }
            },
            //改变视频时间
            changeVideoTime(val) {
                if (this.$refs.vo) {
                    this.$refs.vo.currentTime = val;
                }
            },
            voice(){
                if (this.initVideo.mute){
                    this.$refs.vo.muted=false;
                    this.initVideo.mute = false;
                }else {
                    this.$refs.vo.muted = true;
                    this.initVideo.mute = true;
                }
            },
            // 更新视频时间。节流，每秒触发一次
            videoTimeUpdate() {
                let nowTime = Date.now()
                let gapTime = 1000;
                if (!this.initVideo.lastTime || nowTime - this.initVideo.lastTime > gapTime) {
                    if (this.$refs.vo) {
                        let time = this.$refs.vo.currentTime;
                        this.initVideo.currentTime = time;
                    }
                    this.initVideo.lastTime = nowTime
                }
            },

        },
        computed: {
            videoStyle () {
                return this.isFull ? ({
                    position: 'fixed',
                    top: '0px',
                    zIndex: '200',
                    width: '100%',
                    height: '100%'
                }):({
                    position: 'absolute',
                    zIndex: '-1',
                })
            },
            exitStyle(){
                return this.isFull ? ({
                    display: 'inline',
                }):({
                    display: 'none',
                })
            },
            exitFixStyle(){
                return this.isFull ? ({
                    display: 'flex',
                }):({
                    display: 'none',
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    .wrap {
        display: flex;
        flex-direction: column;
        position: absolute;

        .top {
            width: 100%;
            height: 1283px;
            position: relative;
            &-video{
                position: absolute;
                z-index: -1;
            }
            &-video-exit{
                display: none;
                position: fixed;
                top: 101px;
                left: 131px;
                z-index: 210;
                width: 100px;
                height: 100px;
            }
            &-video-controls{
                display: none;
                position: fixed;
                bottom: 91px;
                width: 100%;
                height: 65px;
                justify-content: center;
                align-items: center;
                z-index: 210;
                .controls-stop{
                    width: 37px;
                    height: 56px;
                }
                .video-progress{
                    width: 88%;
                    margin-left: 50px;
                    margin-right: 50px;
                    /deep/.el-slider__runway{
                        height: 30px;
                        .el-slider__bar{
                            height: 30px;
                            background-color: #2770FF;
                        }
                        .el-slider__button-wrapper{
                            display: none;
                        }
                    }

                }
                .progress {
                    width: 88%;
                    margin-left: 78px;
                    margin-right: 78px;
                    height: 30px;
                    line-height: 10px;
                    background-color: #FFFFFF;
                    opacity: 0.5;
                    border-radius: 15px;
                    vertical-align: super;
                    overflow: hidden;
                    .timrBar {
                        opacity: 1;
                        height: 30px;
                        width: 100px;
                        border-radius: 15px;
                        background: #2770FF;
                    }
                }
                .controls-sound{
                    width: 71px;
                    height: 63px;
                }
                /*.video-sound {*/
                /*    margin-left: 50px;*/
                /*    width: 300px;*/
                /*    height: 30px;*/
                /*    border-radius: 15px;*/
                /*    background-color: #FFFFFF;*/
                /*    opacity: 0.5;*/
                /*    .soundBar {*/
                /*        opacity: 1;*/
                /*        height: 30px;*/
                /*        width: 100px;*/
                /*        border-radius: 15px;*/
                /*        background: #2770FF;*/
                /*    }*/
                /*}*/
            }
            &-title{
                color: #FFFFFF;
                font-size: 90px;
                font-weight: bold;
                margin-left: 647px;
                margin-top: 259px;
            }
            &-learn-more{
                margin-top: 92px;
                margin-left: 647px;
                color: #FEFEFF;
                font-size: 50px;
                line-height: 90px;
                /*background: linear-gradient(to right, rgba(255,255,255,0), #2770FF);*/
                background-image: url("~imgs/houseBuild/projectCostConsultation/player_bg.png");
                background-size: 100% 100%;
                width: 192px+103;
                display: flex;
                align-items: center;
                .el-image{
                    margin-left: 19px;
                    width: 48.7px;
                    height: 48.7px;
                }
            }
            &-menu{
                margin-top: 92px;
                margin-left: 2019px;
                background-color: #0fab42;
                width: 700px * 2;
                height: 200px;
                display: flex;

                .menu-btn {
                    width: 700px;
                    height: 100%;
                    font-size: 50px;
                    font-weight: bold;
                    line-height: 200px;
                    display: flex;
                    align-items: center;
                    .el-image{
                        width: 96px;
                        height: 96px;
                        margin-left: 138px;
                        margin-right: 31px;
                    }
                }

                .menu-btn:nth-child(1) {
                    color: #414245;
                    background-color: #FFFFFF;
                }

                .menu-btn:nth-child(2) {
                    color: #FFFFFF;
                    background-color: #2770FF;
                }
            }
        }

        .bottom {
            background-image: url("~imgs/houseBuild/projectCostConsultation/bottom-bg.png");
            background-size: 100% 100%;
            flex-grow: 1;
            position: relative;
        }

        .main-container{
            width: 3000px;
            height: 866px;
            background-color: #FFFFFF;
            position: absolute;
            left: 420px;
            bottom: 50px;
            display: flex;
            .container-left{
                width: 826px;
                height: 510px;
                margin-left: 370px;
                margin-top: 180px;
                background-image: url("~imgs/houseBuild/projectCostConsultation/main-left-bg.png");
                background-size: 100% 100%;
            }
            .container-right{
                margin-left: 219px;
                margin-top: 180px;
                width: 1236px;
                .right-title{
                    color: #414245;
                    font-size: 54px;
                    font-weight: bold;
                }
                .right-detail{
                    color: #414245;
                    font-size: 44px;
                    margin-top: 80px;
                }
            }

        }
    }
</style>
-->
