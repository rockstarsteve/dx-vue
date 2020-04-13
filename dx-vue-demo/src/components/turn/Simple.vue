<template>
  <div class="content">
    <button @click="pre">上一个</button>
    <button @click="next">下一个</button>
    <div id="flipbook" ref="flipbook" class="flipbook" v-bind:class="{'have-top':!isCover}">
      <div class="hard" style="background-color: royalblue">
        Turn.js<br/>asdfas
      </div>
      <div class="hard" style="">
        <div class="gradient">
          第一的后面
        </div>
      </div>
      <div style="">
        <div class="gradient">
          Page 1
        </div>
      </div>
      <div style="background-color: aquamarine"> Page 2</div>
      <div style="background-color: #FFD00D"> Page 3</div>
      <div style="background-color: khaki"> Page 4</div>
      <div class="hard" style="background-color: #4ac4ac">倒数第二</div>
      <div class="hard" style="background-color: #c3c3c3">最后</div>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery'
  import turn from './components/turn.min'

  export default {
    name: "Simple",
    data() {
      return {
        isCover: true
      }
    },
    methods: {
      pre() {
        console.log("要打印的pre日志是：" + "")
        $("#flipbook").turn("previous");
      },
      next() {
        console.log("要打印的next日志是：" + "")
        $("#flipbook").turn("next");
      }

    },
    mounted: function () {
      var _this = this;
      $("#flipbook").turn({
        width: 800,
        height: 600,
        autoCenter: true,
        elevation: 50,
        gradients: false,
      });
      /**
       * 监听是否翻页
       */
      $('.flipbook').bind('turning', function (event, page, view) {
        console.log("要打印的page日志   " + page)

        if (page >= 2) {
          $("#flipbook").turn("size", 700, 500);
          _this.isCover = false
        }
        if (page < 2) {
          $("#flipbook").turn("size", 800, 600);
          _this.isCover = true
        }

      });
    }
  }
</script>

<style lang="less" scoped>
  .content {
    margin-top: 100px;
    margin-left: 100px;
    background-color: pink;
    width: 800px;
    height: 800px;

    div:nth-child(1) {
      margin-left: 0 !important;
    }
  }

  .have-top {
    margin-top: 200px;
  }

  .flipbook {
    .even {
      .gradient {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("./img/right-border.png");
        background-position: right top;
        background-repeat: repeat-y;
      }
    }

    .odd {
      .gradient {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("./img/left-border.png");
        background-position: left top;
        background-repeat: repeat-y;
        /*background-color: #f3f4fb;*/
      }
    }

    .page {
      border-radius: 50px !important;
      background-color: white;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      /*-webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);*/
      /*-moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);*/
      /*-ms-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);*/
      /*-o-box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);*/
      /*box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);*/
      overflow: hidden;

      .page-content {
        width: 1124px;
        height: 1325px;
        margin-left: 130px;
        margin-top: 120px;
        // background: yellowgreen;
        .word {
          font-size: 60px;
          margin-left: 300px;
        }
      }
    }
  }

</style>
