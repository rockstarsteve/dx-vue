<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <p class="p01">路由页面：</p>
    <hr/><br/><br/><br/><br/><br/>

    <router-link to="/MyApp">MyApp</router-link> |
    <router-link to="/MyApp2">跳转到MyApp2</router-link> |
    <router-link to="/MyApp3">跳转到MyApp3</router-link> |
    <router-link to="/TestCon">跳转到TestCon</router-link> |
    <router-link to="/CommunicationParent">跳转到CommunicationParent</router-link> |
    <router-link to="/CommunicationParent2">跳转到CommunicationParent2</router-link> |

    <br/><br/><br/><br/><hr/>



    <button type="button" @click="addnum()">让count加1</button>
    <button type="button" @click="watch1()">watch1</button>
    <div id="numDiv">
      {{num1}}
    </div>

  </div>
</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        num: 1,
        num2: 33,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    watch: {
      num1: function (newVar, oldVar) {
        this.num = newVar
        console.log('new var is ' + newVar)
        console.log('old var is ' + oldVar)
      }
    },
    computed: {
      num1() {
        return this.num;
      }
    },
    methods: {
      addnum() {
        console.log("将num1进行加1操作");
        //提交更改到组件中
        this.$store.commit('increase');
      },
      watch1: function () {
        this.num = this.$store.state.count
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  #numDiv {
    font-size: xx-large;
    background-color: aqua;
  }

  .p01 {
    text-align: left;
    padding-left: 200px;
    font-size: 24px;
  }


</style>
