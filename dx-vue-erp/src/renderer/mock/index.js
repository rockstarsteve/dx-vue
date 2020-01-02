import Mock from 'mockjs'
import sys from './sys'
import showList from './showList'

Mock.setup({
  timeout: '200-500'
})

export default {

  sys,
  showList
}
