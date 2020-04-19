<template>
  <div class="container">
    数据是：
  </div>
</template>

<script>
  export default {
    name: "Temp",
    methods: {
      getData() {
        this.loading = true;
        let startTime = new Date().getTime();//当前时间戳
        let final_name = "data_" + parseInt(startTime / 1000);//设置保存文件名称
        console.log(`startTime:${startTime},final_name${final_name}`);
        // 1.执行php脚本文件
        // axios('./jb_rk.php',{
        //   params:{
        //     start:this.searchform.date[0],
        //     end:this.searchform.date[1],
        //     agen_id:this.searchform.agen_id,
        //     bnd_id:this.searchform.bnd_id,
        //     div1_id:this.searchform.div1_id,
        //     dep1_id:this.searchform.dep1_id,
        //     name:final_name,//设置数据存放的文件名称
        //   },
        // }).then((res)=>{
        //   console.log("成功执行脚本文件");
        // });
        //2.设置一定的睡眠时间，比如等待五分钟，然后通过一定的命名方式获取相应文件夹下的数据,最终进行渲染

        let mytime = setInterval(function () {
          if (parseInt((new Date().getTime() - startTime) / 1000) > 6) {//比如：设置请求时间最多十分钟
            console.log("超时关闭定时器");
            this.loading = false;
            console.log(mytime);
            clearInterval(mytime);
          }
          // console.log("返回数据关闭定时器");
          // clearInterval(mytime);
          // return;
        })

      }
    },
    created() {
      // 一个打印3次时间的时间的定时为5s的定时器器
      // let mydate = new Date()
      // let timer = setInterval(() => {
      //   let currDate = new Date()
      //   if (currDate.getTime() > mydate.getTime() + 1000 * 5 * 3 + 1000) {
      //     console.log("停止定时器。。。")
      //     // console.log(timer)
      //     clearInterval(timer)
      //   } else {
      //     console.log(`当前时间是：${currDate}`)
      //   }
      // }, 5000)

      this.getData()

    }
  }
</script>

<style scoped>

</style>
