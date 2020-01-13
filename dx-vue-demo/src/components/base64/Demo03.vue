<template>
    <div class="content">
        <div class="canvas"></div>
        <img ref="img"
             src="https://face-test.su.bcebos.com/077cad9151ded03176c714e874f45ded-2b15898e28d07942026bb9f4a188593f0b262038">
        <button @click="show()">show</button>
    </div>
</template>

<script>
    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL("image/png");
        console.log(dataURL)
        return dataURL // return dataURL.replace("data:image/png;base64,", "");
    }

    function myBase64() {
        var img = document.createElement('img');//创建新节点
        var inImgUrl = $('#inImg').attr('src');//获取远程图片url
        var inImgw = $('#inImg').width();//获取当前远程图片在当前屏幕上的宽带
        var inImgh = $('#inImg').height();//获取当前远程图片在当前屏幕上的高度
        img.src = inImgUrl; //把图片url赋值给新节点
        img.setAttribute('width', inImgw);//设置新图片节点的宽
        img.setAttribute('height', inImgh);//设置新图片节点的高
        img.onload = function () {
            var newImg = getBase64Image(img); //编译base64
            //alert(newImg);
            img.src = newImg;
        }
        $('#posterCanvasHeadimg').html(img); //插入新建的img
    }

    export default {
        name: "Demo03",
        methods: {
            show() {

            }
        }
    }
</script>

<style scoped>

</style>
