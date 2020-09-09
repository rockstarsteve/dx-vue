
import Vue from 'vue'
import SvgIcon from '@/components/svg/components/icons/SvgIcon' // svg组件
// 注册全局组件
Vue.component('svg-icon', SvgIcon)



const modulesFiles = require.context("./svg", true, /\.svg$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});
