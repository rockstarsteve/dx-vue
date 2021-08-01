<template>
    <div class="content">
        
    </div>

</template>

<script>
import {sm4} from './SM4Encode'
    export default {
        name: "MyMessage",
        data() {
            return {
                text: ''
            }
        },
        methods: {
            show() {

            }
        },
        mounted() {
            console.log("ok")

            console.log(sm4.encryptHex_ecb('00000000000000000000000000000000','62DB58D48979C035AA37AC49F5FB8581'))
        }
    }
</script>

<style>
    
</style>
