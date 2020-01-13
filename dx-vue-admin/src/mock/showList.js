import Mock from "mockjs";

/**
 * 首页卡片数据
 */
Mock.mock("/showList/getCont", {
  code: 200,
  msg: "ok",
  data: [
    {
      title: "昨日增加人数",
      count: "23,444"
    },
    {
      title: "阅读数",
      count: "23,444"
    }
  ]
})

/**
 * 获取列表页数据
 */
Mock.mock("/vue/getData", {
  code: 200,
  msg: "ok",
  data: [
    {
      "name": "tom",
      "nick": "tom001",
      "address": "湖南",
      "birthDay": 1577983360719
    },
    {
      "name": "tom2",
      "nick": "tom002",
      "address": "湖北",
      "birthDay": 1577983360720
    },
    {
      "name": "tom",
      "nick": "tom001",
      "address": "湖南",
      "birthDay": 1577983360720
    },
    {
      "name": "tom2",
      "nick": "tom002",
      "address": "湖北",
      "birthDay": 1577983360720
    }
  ]
})

export default {}
