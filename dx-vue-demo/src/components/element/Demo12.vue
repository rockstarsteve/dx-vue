<template>
    <div class="content">
        <el-row>
            <el-col :span="8" v-for="(item, index) in dataList" :key="item.name" :offset="index > 0 ? 2 : 0">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>{{item.name}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text">点击购买</el-button>
                    </div>
                    <el-image
                            style="width: 200px; height: 200px"
                            :src="item.url"
                            :fit="fit"></el-image>
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    // 卡片
    export default {
        name: "Demo12",

        data() {
            return {
                dataList: [
                    {
                        name: "001号",
                        url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    },
                    {
                        name: "001号",
                        url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    }
                ]
            }
        }


    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>
