
import axios from 'axios';

export default {
  install(Vue, options) {
    Vue.prototype.$get = function (url, data) {
      return axios.get(url, data);
    }

  }
}
