import Mock from 'mockjs'

Mock.mock('/sys/login', {
  code: 200,
  msg: 'ok',
  data: 'success'
})

export default {

}
