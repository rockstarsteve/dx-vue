<template>
    <div class="content">
        <el-checkbox-group v-model="checkedCities">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        name: "Demo22",
        data() {
            return {
                checkedCities: [],
                cities: cityOptions
            };
        }
    }
</script>

<style lang="less" scoped>
    .content {
        /deep/ .el-checkbox {
            position: relative;
            margin: 0px;
            padding: 0px;
            .el-checkbox__input {
                display: flex;
                position: relative;
                top: 34px;
                border: 0;

                .el-checkbox__inner {
                    border: 0;
                    width: 100%;
                    height: 68px;
                    padding-left: 35px;
                    padding-right: 35px;
                    border-radius: 34px;
                }
            }
            .el-checkbox__label{
                position: relative;
                margin: 0;
                padding: 0;
                top: -33px;
                color: black;
                font-size: 40px;
                line-height: 68px;
                text-align:center;
                padding-left: 32px;
                padding-right: 32px;

                z-index: 999;
            }



            .el-checkbox__input.is-checked .el-checkbox__inner::after{
                width: 0px;
                height: 0px;
                border: 0;
                webkit-transform: none;
                transform: none;
            }

        }
        /deep/ .el-checkbox.is-checked{
            .el-checkbox__input {
                .el-checkbox__inner {
                    background-color: #2770FF;
                }
            }
            .el-checkbox__label{
                color: #ffffff;
            }
        }
    }

</style>
