class StringUtil {
  /**
   * 补零
   */
  static repairZero(num) {
    return num < 10 ? ("0" + num) : num
  }
}


class DateUtil {
  /**
   * 获取格式化时间文本
   */
  static getFormatText(now = new Date()) {
    const yyyy = now.getFullYear()
    const mm = StringUtil.repairZero(now.getMonth() + 1)
    const dd = StringUtil.repairZero(now.getDate())
    const hh = StringUtil.repairZero(now.getHours())
    const mi = StringUtil.repairZero(now.getMinutes())
    const ss = StringUtil.repairZero(now.getSeconds())
    const str = "日一二三四五六"
    const week = str[now.getDay()]
    return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss} 周${week}`
  }

  /**
   * 获取年月日文本
   */
  static getFormatDate() {
    return this.getFormatText().split(' ')[0]
  }

  /**
   * 获取时分秒文本
   */
  static getFormatTime() {
    return this.getFormatText().split(' ')[1]
  }

  /**
   * 获取星期几文本
   */
  static getFormatWeek() {
    return this.getFormatText().split(' ')[2]
  }
}

export {DateUtil}


