<template>
  <div class="scrollScreen">
    <div class="box">
    </div>
  </div>
</template>

<script>
export default {
  name: "scrollScreen",
  props: {},
  data() {
    return {
      num: 0,
      list: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.appendNode();//0.5秒取出一条数据；3秒取完6条
    }, 500);
    setTimeout(() => {
      this.removeNode()
    }, 5000)//5秒后第一条数据跑完，等待5秒后开始删除数据
    setInterval(() => {
      this.list = [
        {
          date: "2016-05-",
          name: "王小虎",
          address: "普陀区金沙江路 1518 弄" + (this.num++)
        },
        {
          date: "2016-05-",
          name: "王小虎",
          address: "普陀区金沙江路 1517 弄" + (this.num++)
        },
        {
          date: "2016-05-",
          name: "王小虎" ,
          address: "普陀区金沙江路 1519 弄" + (this.num++)
        },
        {
          date: "2016-05-",
          name: "王小虎",
          address: "普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-",
          name: "王小虎",
          address: "普陀区金沙江路 1517 弄" + (this.num++)
        },
        {
          date: "2016-05-",
          name: "王小虎",
          address: "普陀区金沙江路 1517 弄" + (this.num++)
        }]
    }, 3000)//3秒请求新的数据（如果请求时间缓慢，可以先请求，暂存数据再赋值）
  },
  methods: {
    appendNode() {
      var box = document.getElementsByClassName("box")[0];
      var line = document.createElement("div");
      line.className = "Line";
      let data = this.list.shift()
      let keyList = Object.keys(data)
      for (let i = 0; i < 3; i++) {
        var cell = document.createElement("div")
        cell.className = "cell";
        cell.innerText = data[keyList[i]]
        line.appendChild(cell)
      }
      box.appendChild(line);
    },
    removeNode() {
      setInterval(() => {
        var box = document.getElementsByClassName("box")[0];
        var line = document.getElementsByClassName("Line")[0];
        box.removeChild(line)
      }, 500);
    }
  }
};
</script>


<style lang="less"> //去掉scoped，否则会导致用js添加的元素使用css样式失效
.scrollScreen {
  width: 400px; //可视区宽400px；高120px
  height: 120px;
  background: #f6cece;
  padding: 0 20px;
}

.box {
  position: relative;
}

.Line {
  position: absolute;
  display: flex;
  color: #fff;
  justify-content: space-between;
  line-height: 30px;
  top: 200px; //单条数据顶部相较于可视区顶部距离200px
  animation: transform 5s linear; //设置5s匀速动画
  .cell {
    margin: 0 5px;
  }
}

@keyframes transform {
  from {
    top: 200px; //单条数据通可视区底部到
  }
  to {
    top: -30px;
  }
}
</style>


