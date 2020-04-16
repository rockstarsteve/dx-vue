const numeral = require('numeral');

const TEN_THOUSANDS = 10000
const HUNDRED_MILLION = 100000000

numeral(345333).format('0,0')// => '345,333' //整数处理
numeral(3.45333).format('0.00')// => '3.45'   // 保留两位小数
numeral(0.9756).format('0.00%')// => ’97.56%’ // 百分比处理

numeral(14321235334343).divide(HUNDRED_MILLION).format('0,0.00') //=> ‘143,212.35亿’ //亿处理
numeral(143212353).divide(TEN_THOUSANDS).format('￥0,0.00')// => '14,321.24'万 //万处理

// 格式化数字, 大于亿的展示为亿，大于万的展示为万...
function formatNum(number) {
  if (number > HUNDRED_MILLION) {
    return numeral(number).divide(HUNDRED_MILLION).format('0,0.00') + '亿'
  } else if (number > TEN_THOUSANDS) {
    return numeral(number).divide(TEN_THOUSANDS).format('0,0.00') + '万'
  } else {
    return numeral(number).format('0,0.00')
  }
}

console.log(formatNum(20000000))
