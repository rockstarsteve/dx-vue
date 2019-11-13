<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in listData" :key="item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{item.title}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          {{item.count}}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        listData: [
          {
            "title": "用户人数",
            "count": "12,000"
          }
        ]
      }
    },
    created() {
    }
  }
</script>

<style scoped>

</style>
