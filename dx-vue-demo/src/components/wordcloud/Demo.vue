<template>
  <div class="content" id="word_cloud_view_id">
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts-wordcloud');
import 'echarts/theme/macarons.js'

export default {
  name: "Demo",
  data: () => ({
    //黑色图片的png
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAE5UlEQVR4nO2dzW9UVRjGf734EdAUMBS0TYhoVBCqBlcUiYkxNCFuXODGhStxof8CiRvjksQ/QGOii7K0C9KgdiNEXXQhmBAtVJsQJDRMNQIZplRzhvdM2kuncztz77nvnfP+kmfZ6T3Pc+98nI/3HUA/TwKjwH5gj2gXsAPYDjwMPC6j+BdoADVgAbgOzIl+BS4C1zSPWGMge4Fx4DAwBozk/PpXgfPAOWAKuJTz61ced1McAk7JnfxfYM3J/x5TeoMGYxg4CcyWEEI7zco1DUeSQZODwFfAXUVBpHVXrvGgAr8Kww3uG8UhtNNkvwUzBHwOLFcwDK9lGcOQAj+7ZhPwoXwFrWoQadVkTJuqFsYBYKaPgkhrRsZYCU4At/s4DK87Mla1DAITEQSR1oSMXRX7gN8jDMPL/X55UUsgbwA3Iw7D66Z4USpvA3ULo6W6eFIK7wJLFsIDWhJvgnLcwugYyvGQnxn2NtVZ9RCfKW6haNHMzqxF8awQ3DzOvJm8Yc0XMQfm5m6mzdyuNZ11/ivrJNnHwHu9ZRo1T8tq5HQeJrxm36hy0ZJ42RObI58SyVuz4mlbOr1lfQq8Ffv7TY48ATwKnO3mJffJHqfY7+q81ZA9ZhtmyswrTFMbDeOomVa4jmYNw309+9EMK1w/Zd2YN25mBdN4lkDOmlHB9G2nMEbNpOBaNfmYpAJ5P8sjZOTKBytfbOWHivvB8hewzfwOyqKcgXHrJ6uekGMWRilsE++brAzknTjGr5KW9/4tyx0LuwFsjd2ZkvhbFrEa/gk5ZGGUylY5wdV6y3ozTh9U0czAB9LzwonRM+6Qa/MzxK2J/ANsMU9LxZ0YGHRPyHMWhgpcBi+4QF6O3QlFjPonxNDB8y6QZy0MNTzjAtkduwuK2J1IERdDB0NJ1c9e9xk7EvvKq4otAzIP/0jsTiihMSBLloYSEql8Yyh5QhKpSGDo4HYik1qGokAWFFyIcZ+FRJZuDR00A5m3MNTwpwvkcuwuKOJKIkfWDB385gL5xcJQwwVbU9dDa039nhweMcrlZ5eF3wb0g4VROs0MfCDfxeuDGpoZ2N5eHTywt9ednT4TuyslckYyWHUc4XRsLiii5b2doCqftieo6tKiwQjL1z6MtbBTuMpO4V6wr8BB+V48Xxer5BBOmSo5DMhUSuxmFa3MtU6wakBBlLkakMfqZRWnDdfLQqqeWUW5/NVYrzvPejUXb0ijkrFu0jTacqqX33ublTV+rLo6ViXNgtXtzUfOwyOd/M5S2dptE3oIeL3XZCPnE+DLvCyw2u+9aVpu6lyx7gjdqZDuCJ6XgFtmcmY5r14pKgzPMeuwk0n1kGXarQfV+grag8pjXdrWVild2jzWx3C1Su1j6LFOn/dV09Dp07NfjjXEGsblbltQFMmgbGeJLYzTGrtFr+SEnOzt9yDupKtSa2ZUuvL3axgzRTaMLAo3d/ORfNj1SxA1GVPu81Ih2Ql8ASxXOIhlGcPOKgeR5lVgsoJhTMq19y1ucBPK1+sbco19HUSaEeCkst8vV+SahnVZFZZEljY/A+ZKCGFO/veRNbbWBifzzrmA7JUtlodlx8tIzv/6KnAeOCf7oy5pGrzGQNI8JfuYDkjX5T3ALineuV2q4T0mf3NL6n/VpKjOdXkC/gAuiq7pGZqhG+B/jhaiXhVHA9kAAAAASUVORK5CYII=",
    word_cloud_view: null,
    word_cloud_options: {},
    word_list: [
      {
        "name": "花鸟市场",
        "value": 1446
      },
      {
        "name": "汽车",
        "value": 928
      },
      {
        "name": "视频",
        "value": 906
      },
      {
        "name": "电视",
        "value": 825
      },
      {
        "name": "Lover Boy 88",
        "value": 514
      },
      {
        "name": "动漫",
        "value": 486
      },
      {
        "name": "音乐",
        "value": 53
      },
      {
        "name": "直播",
        "value": 163
      },
      {
        "name": "广播电台",
        "value": 86
      },
      {
        "name": "戏曲曲艺",
        "value": 17
      },
      {
        "name": "演出票务",
        "value": 6
      },
      {
        "name": "给陌生的你听",
        "value": 1
      },
      {
        "name": "资讯",
        "value": 1437
      },
      {
        "name": "商业财经",
        "value": 422
      },
      {
        "name": "娱乐八卦",
        "value": 353
      },
      {
        "name": "军事",
        "value": 331
      },
      {
        "name": "科技资讯",
        "value": 313
      },
      {
        "name": "社会时政",
        "value": 307
      },
      {
        "name": "时尚",
        "value": 43
      },
      {
        "name": "网络奇闻",
        "value": 15
      },
      {
        "name": "旅游出行",
        "value": 438
      },
      {
        "name": "景点类型",
        "value": 957
      },
      {
        "name": "国内游",
        "value": 927
      },
      {
        "name": "远途出行方式",
        "value": 908
      },
      {
        "name": "酒店",
        "value": 693
      },
      {
        "name": "关注景点",
        "value": 611
      },
      {
        "name": "旅游网站偏好",
        "value": 512
      },
      {
        "name": "出国游",
        "value": 382
      },
      {
        "name": "交通票务",
        "value": 312
      },
      {
        "name": "旅游方式",
        "value": 187
      },
      {
        "name": "旅游主题",
        "value": 163
      },
      {
        "name": "港澳台",
        "value": 104
      },
      {
        "name": "本地周边游",
        "value": 3
      },
      {
        "name": "小卖家",
        "value": 1331
      },
      {
        "name": "全日制学校",
        "value": 941
      },
      {
        "name": "基础教育科目",
        "value": 585
      },
      {
        "name": "考试培训",
        "value": 473
      },
      {
        "name": "语言学习",
        "value": 358
      },
      {
        "name": "留学",
        "value": 246
      },
      {
        "name": "K12课程培训",
        "value": 207
      },
      {
        "name": "艺术培训",
        "value": 194
      },
      {
        "name": "技能培训",
        "value": 104
      },
      {
        "name": "IT培训",
        "value": 87
      },
      {
        "name": "高等教育专业",
        "value": 63
      },
      {
        "name": "家教",
        "value": 48
      },
      {
        "name": "体育培训",
        "value": 23
      },
      {
        "name": "职场培训",
        "value": 5
      },
      {
        "name": "金融财经",
        "value": 1328
      },
      {
        "name": "银行",
        "value": 765
      },
      {
        "name": "股票",
        "value": 452
      },
      {
        "name": "保险",
        "value": 415
      },
      {
        "name": "贷款",
        "value": 253
      },
      {
        "name": "基金",
        "value": 211
      },
      {
        "name": "信用卡",
        "value": 180
      },
      {
        "name": "外汇",
        "value": 138
      },
      {
        "name": "P2P",
        "value": 116
      },
      {
        "name": "贵金属",
        "value": 98
      },
      {
        "name": "债券",
        "value": 93
      },
      {
        "name": "网络理财",
        "value": 92
      },
      {
        "name": "信托",
        "value": 90
      },
      {
        "name": "征信",
        "value": 76
      },
      {
        "name": "期货",
        "value": 76
      },
      {
        "name": "公积金",
        "value": 40
      },
      {
        "name": "银行理财",
        "value": 36
      },
      {
        "name": "银行业务",
        "value": 30
      },
      {
        "name": "典当",
        "value": 7
      },
      {
        "name": "海外置业",
        "value": 1
      },
      {
        "name": "汽车",
        "value": 1309
      },
      {
        "name": "汽车档次",
        "value": 965
      },
      {
        "name": "汽车品牌",
        "value": 900
      },
      {
        "name": "汽车车型",
        "value": 727
      },
      {
        "name": "购车阶段",
        "value": 461
      },
      {
        "name": "二手车",
        "value": 309
      },
      {
        "name": "汽车美容",
        "value": 260
      },
      {
        "name": "新能源汽车",
        "value": 173
      },
      {
        "name": "汽车维修",
        "value": 155
      },
      {
        "name": "租车服务",
        "value": 136
      },
      {
        "name": "车展",
        "value": 121
      },
      {
        "name": "违章查询",
        "value": 76
      },
      {
        "name": "汽车改装",
        "value": 62
      },
      {
        "name": "汽车用品",
        "value": 37
      },
      {
        "name": "路况查询",
        "value": 32
      },
      {
        "name": "汽车保险",
        "value": 28
      },
      {
        "name": "陪驾代驾",
        "value": 4
      },
      {
        "name": "网络购物",
        "value": 1275
      },
      {
        "name": "做我的猫",
        "value": 1088
      },
      {
        "name": "只想要你知道",
        "value": 907
      },
      {
        "name": "团购",
        "value": 837
      },
      {
        "name": "比价",
        "value": 201
      },
      {
        "name": "海淘",
        "value": 195
      },
      {
        "name": "移动APP购物",
        "value": 179
      },
      {
        "name": "支付方式",
        "value": 119
      },
      {
        "name": "代购",
        "value": 43
      },
      {
        "name": "体育健身",
        "value": 1234
      },
      {
        "name": "体育赛事项目",
        "value": 802
      },
      {
        "name": "运动项目",
        "value": 405
      },
      {
        "name": "体育类赛事",
        "value": 337
      },
      {
        "name": "健身项目",
        "value": 199
      },
      {
        "name": "健身房健身",
        "value": 78
      },
      {
        "name": "运动健身",
        "value": 77
      },
      {
        "name": "家庭健身",
        "value": 36
      },
      {
        "name": "健身器械",
        "value": 29
      },
      {
        "name": "办公室健身",
        "value": 3
      },
      {
        "name": "商务服务",
        "value": 1201
      },
      {
        "name": "法律咨询",
        "value": 508
      },
      {
        "name": "化工材料",
        "value": 147
      },
      {
        "name": "广告服务",
        "value": 125
      },
      {
        "name": "会计审计",
        "value": 115
      },
      {
        "name": "人员招聘",
        "value": 101
      },
      {
        "name": "印刷打印",
        "value": 66
      },
      {
        "name": "知识产权",
        "value": 32
      },
      {
        "name": "翻译",
        "value": 22
      },
      {
        "name": "安全安保",
        "value": 9
      },
      {
        "name": "公关服务",
        "value": 8
      },
      {
        "name": "商旅服务",
        "value": 2
      },
      {
        "name": "展会服务",
        "value": 2
      },
      {
        "name": "特许经营",
        "value": 1
      },
      {
        "name": "休闲爱好",
        "value": 1169
      },
      {
        "name": "收藏",
        "value": 412
      },
      {
        "name": "摄影",
        "value": 393
      },
      {
        "name": "温泉",
        "value": 230
      },
      {
        "name": "博彩彩票",
        "value": 211
      },
      {
        "name": "美术",
        "value": 207
      },
      {
        "name": "书法",
        "value": 139
      },
      {
        "name": "DIY手工",
        "value": 75
      },
      {
        "name": "舞蹈",
        "value": 23
      },
      {
        "name": "钓鱼",
        "value": 21
      },
      {
        "name": "棋牌桌游",
        "value": 17
      },
      {
        "name": "KTV",
        "value": 6
      },
      {
        "name": "密室",
        "value": 5
      },
      {
        "name": "采摘",
        "value": 4
      },
      {
        "name": "电玩",
        "value": 1
      },
      {
        "name": "真人CS",
        "value": 1
      },
      {
        "name": "轰趴",
        "value": 1
      },
      {
        "name": "家电数码",
        "value": 1111
      },
      {
        "name": "手机",
        "value": 885
      },
      {
        "name": "电脑",
        "value": 543
      },
      {
        "name": "大家电",
        "value": 321
      },
      {
        "name": "家电关注品牌",
        "value": 253
      },
      {
        "name": "网络设备",
        "value": 162
      },
      {
        "name": "摄影器材",
        "value": 149
      },
      {
        "name": "影音设备",
        "value": 133
      },
      {
        "name": "办公数码设备",
        "value": 113
      },
      {
        "name": "生活电器",
        "value": 67
      },
      {
        "name": "厨房电器",
        "value": 54
      },
      {
        "name": "智能设备",
        "value": 45
      },
      {
        "name": "个人护理电器",
        "value": 22
      },
      {
        "name": "服饰鞋包",
        "value": 1047
      },
      {
        "name": "服装",
        "value": 566
      },
      {
        "name": "饰品",
        "value": 289
      },
      {
        "name": "鞋",
        "value": 184
      },
      {
        "name": "箱包",
        "value": 168
      },
      {
        "name": "奢侈品",
        "value": 137
      },
      {
        "name": "母婴亲子",
        "value": 1041
      },
      {
        "name": "孕婴保健",
        "value": 505
      },
      {
        "name": "母婴社区",
        "value": 299
      },
      {
        "name": "早教",
        "value": 103
      },
      {
        "name": "奶粉辅食",
        "value": 66
      },
      {
        "name": "童车童床",
        "value": 41
      },
      {
        "name": "关注品牌",
        "value": 271
      },
      {
        "name": "宝宝玩乐",
        "value": 30
      },
      {
        "name": "母婴护理服务",
        "value": 25
      },
      {
        "name": "纸尿裤湿巾",
        "value": 16
      },
      {
        "name": "妈妈用品",
        "value": 15
      },
      {
        "name": "宝宝起名",
        "value": 12
      },
      {
        "name": "童装童鞋",
        "value": 9
      },
      {
        "name": "胎教",
        "value": 8
      },
      {
        "name": "宝宝安全",
        "value": 1
      },
      {
        "name": "宝宝洗护用品",
        "value": 1
      },
      {
        "name": "软件应用",
        "value": 1018
      },
      {
        "name": "系统工具",
        "value": 896
      },
      {
        "name": "理财购物",
        "value": 440
      },
      {
        "name": "生活实用",
        "value": 365
      },
      {
        "name": "影音图像",
        "value": 256
      },
      {
        "name": "社交通讯",
        "value": 214
      },
      {
        "name": "手机美化",
        "value": 39
      },
      {
        "name": "办公学习",
        "value": 28
      },
      {
        "name": "应用市场",
        "value": 23
      },
      {
        "name": "母婴育儿",
        "value": 14
      },
      {
        "name": "游戏",
        "value": 946
      },
      {
        "name": "手机游戏",
        "value": 565
      },
      {
        "name": "PC游戏",
        "value": 353
      },
      {
        "name": "网页游戏",
        "value": 254
      },
      {
        "name": "游戏机",
        "value": 188
      },
      {
        "name": "模拟辅助",
        "value": 166
      },
      {
        "name": "个护美容",
        "value": 942
      },
      {
        "name": "护肤品",
        "value": 177
      },
      {
        "name": "彩妆",
        "value": 133
      },
      {
        "name": "美发",
        "value": 80
      },
      {
        "name": "香水",
        "value": 50
      },
      {
        "name": "个人护理",
        "value": 46
      },
      {
        "name": "美甲",
        "value": 26
      },
      {
        "name": "SPA美体",
        "value": 21
      },
      {
        "name": "花鸟萌宠",
        "value": 914
      },
      {
        "name": "绿植花卉",
        "value": 311
      },
      {
        "name": "狗",
        "value": 257
      },
      {
        "name": "其他宠物",
        "value": 131
      },
      {
        "name": "水族",
        "value": 125
      },
      {
        "name": "猫",
        "value": 122
      },
      {
        "name": "动物",
        "value": 81
      },
      {
        "name": "鸟",
        "value": 67
      },
      {
        "name": "宠物用品",
        "value": 41
      },
      {
        "name": "宠物服务",
        "value": 26
      },
      {
        "name": "书籍阅读",
        "value": 913
      },
      {
        "name": "网络小说",
        "value": 483
      },
      {
        "name": "关注书籍",
        "value": 128
      },
      {
        "name": "文学",
        "value": 105
      },
      {
        "name": "报刊杂志",
        "value": 77
      },
      {
        "name": "人文社科",
        "value": 22
      },
      {
        "name": "建材家居",
        "value": 907
      },
      {
        "name": "装修建材",
        "value": 644
      },
      {
        "name": "家具",
        "value": 273
      },
      {
        "name": "家居风格",
        "value": 187
      },
      {
        "name": "家居家装关注品牌",
        "value": 140
      },
      {
        "name": "家纺",
        "value": 107
      },
      {
        "name": "厨具",
        "value": 47
      },
      {
        "name": "灯具",
        "value": 43
      },
      {
        "name": "家居饰品",
        "value": 29
      },
      {
        "name": "家居日常用品",
        "value": 10
      },
      {
        "name": "生活服务",
        "value": 883
      },
      {
        "name": "物流配送",
        "value": 536
      },
      {
        "name": "家政服务",
        "value": 108
      },
      {
        "name": "摄影服务",
        "value": 49
      },
      {
        "name": "搬家服务",
        "value": 38
      },
      {
        "name": "物业维修",
        "value": 37
      },
      {
        "name": "婚庆服务",
        "value": 24
      },
      {
        "name": "二手回收",
        "value": 24
      },
      {
        "name": "鲜花配送",
        "value": 3
      },
      {
        "name": "维修服务",
        "value": 3
      },
      {
        "name": "殡葬服务",
        "value": 1
      },
      {
        "name": "求职创业",
        "value": 874
      },
      {
        "name": "创业",
        "value": 363
      },
      {
        "name": "目标职位",
        "value": 162
      },
      {
        "name": "目标行业",
        "value": 50
      },
      {
        "name": "兼职",
        "value": 21
      },
      {
        "name": "期望年薪",
        "value": 20
      },
      {
        "name": "实习",
        "value": 16
      },
      {
        "name": "雇主类型",
        "value": 10
      },
      {
        "name": "星座运势",
        "value": 789
      },
      {
        "name": "星座",
        "value": 316
      },
      {
        "name": "算命",
        "value": 303
      },
      {
        "name": "解梦",
        "value": 196
      },
      {
        "name": "风水",
        "value": 93
      },
      {
        "name": "面相分析",
        "value": 47
      },
      {
        "name": "手相",
        "value": 32
      },
      {
        "name": "公益",
        "value": 90
      }
    ]
  }),
  methods: {
    draw_word_cloud_view() {
      if (this.word_cloud_view) {
        this.word_cloud_view.dispose();
      }
      this.word_cloud_view = document.getElementById('word_cloud_view_id') && echarts.init(document.getElementById('word_cloud_view_id'), 'macarons');
      this.word_cloud_view && this.word_cloud_view.setOption(this.word_cloud_options);
    },
    init_view_data() {
      var maskImage = new Image();
      maskImage.src = this.image


      let word_cloud_series = [{
        type: 'wordCloud',
        shape: 'circle',
        maskImage: maskImage,
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,
        sizeRange: [6, 60],
        rotationRange: [-45, 90],
        autoSize: {
          enable: true,
          minSize: 6
        },
        textPadding: 0,
        // rotationStep: 45,
        // gridSize: 8,
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                Math.round(Math.random() * 256),
                Math.round(Math.random() * 256),
                Math.round(Math.random() * 256)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: this.word_list
      }]

      this.word_cloud_options = {
        series: word_cloud_series
      }
      this.word_cloud_view.setOption(this.word_cloud_options)
    },
  },
  mounted() {
    this.draw_word_cloud_view()
    this.init_view_data()
  },
}
</script>

<style scoped>
.content {
  width: 400px;
  height: 400px;
}
</style>
