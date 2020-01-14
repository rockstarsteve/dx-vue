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
      "id" : "01",
      "name": "tom",
      "nick": "tom001",
      "address": "湖南",
      "birthDay": 1577983360719
    },
    {
      "id" : "02",
      "name": "tom2",
      "nick": "tom002",
      "address": "湖北",
      "birthDay": 1577983360720
    },
    {
      "id" : "03",
      "name": "tom",
      "nick": "tom001",
      "address": "湖南",
      "birthDay": 1577983360720
    },
    {
      "id" : "04",
      "name": "tom2",
      "nick": "tom002",
      "address": "湖北",
      "birthDay": 1577983360720
    },
    {
      "id" : "04",
      "name": "tom",
      "nick": "tom001",
      "address": "湖南",
      "birthDay": 1577983360719
    },
    {
      "id" : "05",
      "name": "tom2",
      "nick": "tom002",
      "address": "湖北",
      "birthDay": 1577983360720
    },
    {
      "id" : "06",
      "name": "tom",
      "nick": "tom001",
      "address": "湖南",
      "birthDay": 1577983360720
    },
    {
      "id" : "07",
      "name": "tom2",
      "nick": "tom002",
      "address": "湖北",
      "birthDay": 1577983360720
    },
    {
      "id" : "08",
      "name": "tom",
      "nick": "tom001",
      "address": "湖南",
      "birthDay": 1577983360719
    },
    {
      "id" : "08",
      "name": "tom2",
      "nick": "tom002",
      "address": "湖北",
      "birthDay": 1577983360720
    },
    {
      "id" : "09",
      "name": "tom",
      "nick": "tom001",
      "address": "湖南",
      "birthDay": 1577983360720
    },
    {
      "id" : "10",
      "name": "tom2",
      "nick": "tom002",
      "address": "湖北",
      "birthDay": 1577983360720
    }
  ]
})

export default {}
