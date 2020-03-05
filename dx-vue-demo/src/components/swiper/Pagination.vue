<template>
    <div class="content">

        <div class="top">
            <div class="title">我是标题</div>
            <div class="description">
                介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容
                介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容
            </div>

            <div class="content">
                <swiper :options="swiperOption" class="swiper-no-swiping">
                    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}
                    </swiper-slide>
                    <!--            分页器-->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data() {
            return {
                swiperOption: {
                    //自动切换
                    autoplay: true,
                    //分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                },

                swiperSlides: [1, 2, 3, 4, 5]
            }
        },
    }
</script>

<style lang="less" scoped>
    .content {
        .top {
            width: 500px;
            height: 500px;
            /*background-color: pink;*/
            position: relative;

            .title{
                position: absolute;
                top: 35px;
                height: 40px;
                background-color: pink;
                z-index: 60;
            }
            .description{
                position: absolute;
                top: 114px;
                height: 100px;
                background-color: #409EFF;
                z-index: 60;
            }

            .content {
                position: absolute !important;
                width: 500px;
                height: 500px;
                top: 0px;
                left: 0px;
                z-index: 50;

                /deep/ .swiper-container {
                    background-color: red;
                    width: 500px !important;
                    height: 500px !important;


                }
            }

        }

    }


</style>
