<template>
  <div id="app">
    <div v-for="(list,index) in lists">
      <ul>
        <li>
          <span>名字</span>
          <input type="text" v-model="list.name" style="width:100px">
        </li>
        <li>
          <span>电话</span>
          <input type="text" v-model="list.tel" style="width:100px">
        </li>
        <li>
          <button @click="del(index)">删除联系人</button>
        </li>
      </ul>
    </div>
    <button @click="add">添加联系人</button>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return{
        tables: [],
        lists: [{
          name: "wang",
          tel: "qwe"
        }]
      }
    },
    methods: {
      add: function () {
        let cope = {
          name: "",
          tel: ""
        }
        this.lists.push(cope);
        console.log(this.lists)
      },
      del: function (index) {
        this.lists.splice(index, 1);
        console.log(this.lists)
      }
    }
  }
</script>

<style scoped>

</style>
