<template>
    <div class="content">
<!--        把https://face-test.su.bcebos.com/077cad9151ded03176c714e874f45ded-2b15898e28d07942026bb9f4a188593f0b262038-->
<!--        转换成base64编码是： {{baseUrl}}-->

        <!--        把https://face-test.su.bcebos.com/077cad9151ded03176c714e874f45ded-2b15898e28d07942026bb9f4a188593f0b262038-->
        <!--        中的图片转换成base64编码是： {{baseUrlImg}}-->
    </div>
</template>

<script>
    // import md5 from 'js-md5';
    //
    // let Base64 = require('js-base64').Base64;

    export default {
        name: "Demo01",
        data() {
            return {
                // baseUrl: Base64.encode('https://face-test.su.bcebos.com/077cad9151ded03176c714e874f45ded-2b15898e28d07942026bb9f4a188593f0b262038'),
                baseUrlImg: ''
            }
        },
        mounted: {
            // show() {
            //     this.main('https://face-test.su.bcebos.com/077cad9151ded03176c714e874f45ded-2b15898e28d07942026bb9f4a188593f0b262038', function (base64) {
            //         console.log(base64, '是否成功打印base64');
            //     })
            // }
        },
        methods: {


            // getBase64Image(img) {
            //     var canvas = document.createElement("canvas");
            //     canvas.width = img.width;
            //     canvas.height = img.height;
            //     var ctx = canvas.getContext("2d");
            //     ctx.drawImage(img, 0, 0, img.width, img.height);
            //     var dataURL = canvas.toDataURL("image/png"); // 可选其他值 image/jpeg
            //     return dataURL;
            // },

            // main(src, cb) {
            //     var image = new Image();
            //     image.src = src + '?v=' + Math.random(); // 处理缓存
            //     image.crossOrigin = "*"; // 支持跨域图片
            //     image.onload = function () {
            //         var base64 = this.getBase64Image(image);
            //         cb && cb(base64);
            //     }
            // }


        }
    }
</script>

<style scoped>

</style>
