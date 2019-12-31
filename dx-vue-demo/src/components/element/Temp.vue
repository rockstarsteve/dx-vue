<template>
    <!--    <dialog :show-dialog="showDialog" :msg="msg" :type="type"></dialog>-->
    <div class="content">
        <my-dialog :dialogVisibleFlag = "dialogVisibleFlag" :contentImage=''></my-dialog>
        hello world
        <div class="menu">
            <ul>
                <li v-for="(item, index) in menuData" :key="index" @click="tabMenu(index)">
                    <el-image :src="item.imageUrl" class="menu-image" fit="cover"></el-image>
                    <span class="font-blue">{{ item.title }}</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import MyDialog from './component/Dialog2.vue'

    export default {
        name: "Temp",

        components: {
            MyDialog
        },
        data(){
            return{
                dialogVisibleFlag:1,
                src: require('@/assets/dialog-show.png'),
                menuData: [
                    {
                        title: '租金收益评估',
                        imageUrl: require('@/assets/logo.png')
                    },
                    {
                        title: '租金收益评估',
                        imageUrl: require('@/assets/logo.png')
                    },
                    {
                        title: '租金收益评估',
                        imageUrl: require('@/assets/logo.png')
                    }

                ]
            }
        },
        methods: {
            tabMenu(index) {
                if (index == 0) {
                    // alert("租金收益评估")
                    this.$router.push({ name: 'profitAssessment' });
                } else if (index == 1) {
                    this.dialogVisibleFlag>1?this.dialogVisibleFlag--:this.dialogVisibleFlag++
                    // alert("装修速算")
                } else if (index == 2) {
                    // alert("存房决策")
                    this.dialogVisibleFlag>1?this.dialogVisibleFlag--:this.dialogVisibleFlag++
                }
            }
        },
    }
</script>

<style scoped>

</style>
