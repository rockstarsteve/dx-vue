<template>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="满意度" prop="value">
<!--            <div class="block">-->
                <el-slider
                        v-model="ruleForm.value"
                        show-input>
                </el-slider>
<!--            </div>-->
        </el-form-item>
        <el-form-item label="评分" prop="rates">
            <div class="block">
                <span class="demonstration">区分颜色</span>
                <el-rate
                        v-model="ruleForm.rates"
                        :colors="colors">
                </el-rate>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>

    // 自定义校验规则


    import tool from './tool'

    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var checkValue = (rule, value, callback) => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                }else if(value<50){
                    callback(new Error('数值不能小于50'));
                }else {
                    callback();
                }
            };
            var checkRates = (rule, value, callback) => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                }else if(value<2){
                    callback(new Error('不能小于2星'));
                }else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: '',
                    value: 20,
                    rates: null,
                },
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    age: [
                        {validator: checkAge, trigger: 'blur'}
                    ],
                    value: [
                        {validator: checkValue, trigger: 'blur'}
                    ],
                    rates: [
                        {validator: checkRates, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        tool.writeObj(this.ruleForm)


                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
