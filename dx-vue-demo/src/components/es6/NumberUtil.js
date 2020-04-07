

export default class NumberUtil {
  add(a, b) {
    if (!b) {
      console.log("要打印的!b日志是：" + b)
      b = 0
    }else {
      console.log("else要打印的b日志是：" + b)
    }
    return a + b;
  }
}

