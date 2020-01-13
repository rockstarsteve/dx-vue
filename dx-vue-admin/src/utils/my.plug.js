import axios from '@/utils/my.axios'
import dateutil from '@/utils/my.date'

export default {
  install(Vue, options) {

    Vue.prototype.$success = function (message = "成功",onClose) {
      this.$message({
        type:"success",
        duration: 1500,
        message,
        onClose
      })
    }

    Vue.prototype.$get = function (url, data) {
      return axios.get(url, data);
    }

    Vue.prototype.$post = function (url, data) {
      return axios.post(url, data);
    }

    Vue.prototype.$formatTime = function (number,fomatdate) {
      return dateutil.formatTime(number,fomatdate);
    }

  }
}
