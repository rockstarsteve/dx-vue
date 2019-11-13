import Mock from "mockjs";


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

Mock.mock("/vue/getData", {
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

export default {}
