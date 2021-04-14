<template>
    <div class="content">
        简单的参数ajv
    </div>
</template>

<script>
    import Ajv from 'ajv';
    import localize from 'ajv-i18n';

    export default {

        name: "Simple",
        data() {
            return {
                data: {
                    username: 'tom',
                    email: '23@qq.com',
                    password: '1234567',
                    age: 1,
                    sex: 'girl'
                }
            }
        },
        created() {
            let schema = {
                type: 'object',
                required: ['username', 'email', 'password'],
                properties: {
                    username: {
                        type: 'string',
                        minLength: 4
                    },
                    email: {
                        type: 'string',
                        format: 'email'
                    },
                    password: {
                        type: 'string',
                        minLength: 6
                    },
                    age: {
                        type: 'integer',
                        minimum: 0
                    },
                    sex: {
                        enum: ['boy', 'girl', 'secret'],
                        default: 'secret'
                    },
                }
            };

            let ajv = new Ajv();

            var valid = ajv.validate(schema, this.data);
            if(!valid) {
                console.log(ajv.errors);
            } 


            // let validate = ajv.compile(schema);
            // let valid = validate(this.data);
            // if (!valid) {
            //     console.log("校验的valid结果是：" + valid)
            //     console.log(validate.errors)
            //     // 国际化
            //     localize.ru(validate.errors)
            //     console.log(ajv.errorsText(validate.errors, {separator: '\n'}));
            // }


        }
    }
</script>

<style scoped>

</style>
