<template>
    <div class="content">
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide style="background-color: red">I'm Slide 1</swiper-slide>
            <swiper-slide style="background-color: royalblue">I'm Slide 2</swiper-slide>
            <swiper-slide style="background-color: salmon">I'm Slide 3</swiper-slide>
            <swiper-slide style="background-color: #F6F8FB">I'm Slide 4</swiper-slide>
            <swiper-slide style="background-color: -webkit-focus-ring-color">I'm Slide 5</swiper-slide>
            <swiper-slide style="background-color: hotpink">I'm Slide 6</swiper-slide>
            <swiper-slide style="background-color: navajowhite">I'm Slide 7</swiper-slide>

            <swiper-slide style="background-color: red">I'm Slide 8</swiper-slide>
            <swiper-slide style="background-color: royalblue">I'm Slide 9</swiper-slide>
            <swiper-slide style="background-color: salmon">I'm Slide 10</swiper-slide>
            <swiper-slide style="background-color: #F6F8FB">I'm Slide 11</swiper-slide>
            <swiper-slide style="background-color: -webkit-focus-ring-color">I'm Slide 12</swiper-slide>
            <swiper-slide style="background-color: hotpink">I'm Slide 13</swiper-slide>
            <swiper-slide style="background-color: navajowhite">I'm Slide 14</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!--            <div class="swiper-button-prev" slot="button-prev"></div>-->
            <!--            <div class="swiper-button-next" slot="button-next"></div>-->
            <!--            <div class="swiper-scrollbar" slot="scrollbar"></div>-->
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "OnesideSlide",
        data() {
            return {
                swiperOption: {
                    // some swiper options/callbacks
                    // 所有的参数同 swiper 官方 api 参数
                    // ...
                    // speed: this.swiperSpeed ? this.swiperSpeed : 300,//切换速度
                    // slidesPerView: 3.3,//显示slide个数
                    // loopedSlides : 8,
                    // spaceBetween : 59,//间距
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: true,
                    loop: true,
                }
            }
        },
        // computed: {
        //     swiper() {
        //         return this.$refs.mySwiper.swiper
        //     }
        // },
        // mounted() {
        //     // current swiper instance
        //     // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        //     console.log('this is current swiper instance object', this.swiper)
        //     this.swiper.slideTo(3, 1000, false)
        // }
    }
</script>

<style lang="less" scoped>

    .content{
        margin-left: 10%;
        width: 80%;
        height: 500px;
        /deep/.swiper-container {
            width: 100%;
            height: 100%;
            .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;

                /* Center slide text vertically */
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                transition: 300ms;
                transform: scale(0.6);
            }
            .swiper-slide-active,.swiper-slide-duplicate-active{
                /*width: 400px !important;*/
                transform: scale(1);
            }
        }


    }


</style>
