<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'

    import Demo from "./Demo";

    export default {
        name: 'app',
        components: {
            // HelloWorld
        },
        data() {
            return {
                msg: "default"
            };
        },
        render() {
            return (
                <div>
                    <p>父组件</p>
                    <hr />
                    <Demo msg={this.msg} />
                </div>
            );
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
