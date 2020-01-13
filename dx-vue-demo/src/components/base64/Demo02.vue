<template>
    <div class="content">
        <button @click="show()">show</button>
        {{imgData}}
    </div>
</template>

<script>
    export default {
        name: "Demo02",
        data() {
            return {
                imgData: ''
            }
        },
        methods: {
            show() {
                console.log("地址是：")
                this.main('https://www.baidu.com/img/bd_logo1.png?where=super', function (base64) {
                    console.log(base64, '是否成功打印base64');
                })
            },
            getBase64Image(img) {
                console.log("地址是：" +img)
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, img.width, img.height);
                var dataURL = canvas.toDataURL("image/png"); // 可选其他值 image/jpeg
                return dataURL;
            },

            main(src, cb) {
                var image = new Image();
                image.src = src + '?v=' + Math.random(); // 处理缓存
                image.crossOrigin = "*"; // 支持跨域图片
                image.onload = function () {
                    var base64 = this.getBase64Image(image);
                    cb && cb(base64);
                }
            }
        },
    }
</script>

<style scoped>

</style>
