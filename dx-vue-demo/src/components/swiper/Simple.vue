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
        name: "demo01",
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

<style scoped>

</style>
