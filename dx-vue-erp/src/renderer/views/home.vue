<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in listData" :key="index">
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
    name: 'home',
    data () {
      return {
        listData: []
      }
    },
    created () {
      this.$post('/erp/goods/showList/getCont').then(res => {
        this.listData = res.data.data
      })
    }
  }
</script>

<style scoped>

</style>
