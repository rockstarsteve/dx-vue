import axios from '@/utils/my.axios'
import dateutil from '@/utils/my.date'

export default {
  install(Vue, options) {

    Vue.prototype.$get = function (url, data) {
      return axios.get(url, data);
    }

    Vue.prototype.$formatTime = function (number,fomatdate) {
      return dateutil.formatTime(number,fomatdate);
    }

  }
}
