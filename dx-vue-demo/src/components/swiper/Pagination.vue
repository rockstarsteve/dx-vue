<template>
    <div class="content">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
<!--            分页器-->
            <div class="swiper-pagination" slot="pagination"></div>
<!--            前进后退按钮-->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
        </swiper>
<!--        放在外面需要自定义样式-->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

    </div>
</template>

<script>
    export default {
        name: 'demo02',
        data() {
            return {
                swiperOption: {
                    //自动切换
                    autoplay:true,
                    //切换效果
                    // effect : 'cube',
                    //分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    //前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        hideOnClick: true,
                    },
                    //滑到最后一个隐藏前进按钮
                    on: {
                        slideChangeTransitionEnd: function(){
                            if(this.isEnd){
                                this.navigation.$nextEl.css('display','none');
                            }else{
                                this.navigation.$nextEl.css('display','block');
                            }
                        },
                    },
                    //鼠标控制
                    mousewheel: true,
                    //调焦
                    zoom : true,
                },

                swiperSlides: [1, 2, 3, 4, 5]
            }
        },
    }
</script>

<style scoped>

    /deep/ .swiper-container {
        background-color: red;
        width: 500px !important;
        height: 500px !important;

    }


</style>
