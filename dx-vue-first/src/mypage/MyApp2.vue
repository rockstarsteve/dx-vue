<template>
  <div>
    <div id="app2">
      <ul>
        <li v-for="(item,index) in dataList"
            :key="index"
            class="getClass"
            @click="downCurr(item)"
        >
          {{item}}
        </li>
      </ul>
      <hr/>
      <div id="app3">
        <ul>
          <li v-for="(item,index) in stoneList"
              :key="index"
              class="getClass2"
              @click="upCurr(item)">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyApp2",
    msg: 'ok',
    data() {
      return {
        dataList: [9, 2, 3, 4, 5, 6, 7, 8, 1],
        stoneList: [],
      }
    },
    methods: {
      downCurr: function (item) {
        console.info('把' + item + '在dataList中移除'  + '把' + item + '放到stoneList中'  )
        this.dataList.splice(this.dataList.indexOf(item), 1)
        this.stoneList.push(item);
      },
      upCurr: function (item) {
        console.info('把' + item + '在stoneList中移除'  + '把' + item + '放到dataList中'  )
        this.stoneList.splice(this.stoneList.indexOf(item), 1)
        this.dataList.push(item);
      }


    }
  }
</script>

<style scoped>
  #app2 {
    background-color: pink;
    font-size: larger;
    text-align: center;
  }

  .getClass:hover {
    background-color: red;
  }

  .getClass2:hover {
    background-color: green;

  }

</style>
