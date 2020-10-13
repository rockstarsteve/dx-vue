<template>
  <div class="patent-hot-word1" id="patent-hot-word1">

  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts-wordcloud');
import 'echarts/theme/macarons.js'

export default {
  name: "inex",
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var chart = echarts.init(document.getElementById('patent-hot-word1'));
    var option = {
      title: {
        text: '企业一专利热词'
      },
      tooltip: {},
      series: [{
        type: 'wordCloud',
        gridSize: 2,
        sizeRange: [12, 50],
        // rotationRange: [-90, 90],
        rotationRange: [-50, 50],
        shape: 'triangle',
        // width: 100,
        // height: 400,
        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: [
          {
            name: 'Authentication',
            value: 10000,
            textStyle: {
              normal: {
                color: 'black'
              },
              emphasis: {
                color: 'red'
              }
            }
          },
          {
            name: 'Streaming of segmented content',
            value: 6181
          },
          {
            name: 'Amy Schumer',
            value: 4386
          },
          {
            name: 'Jurassic World',
            value: 4055
          },
          {
            name: 'Charter Communications',
            value: 2467
          },
          {
            name: 'Chick Fil A',
            value: 2244
          },
          {
            name: 'Planet Fitness',
            value: 1898
          },
          {
            name: 'Pitch Perfect',
            value: 1484
          },
          {
            name: 'Express',
            value: 1112
          },
          {
            name: 'Home',
            value: 965
          },
          {
            name: 'Johnny Depp',
            value: 847
          },
          {
            name: 'Lena Dunham',
            value: 582
          },
          {
            name: 'Lewis Hamilton',
            value: 555
          },
          {
            name: 'KXAN',
            value: 550
          },
          {
            name: 'Mary Ellen Mark',
            value: 462
          },
          {
            name: 'Farrah Abraham',
            value: 366
          },
          {
            name: 'Rita Ora',
            value: 360
          },
          {
            name: 'Serena Williams',
            value: 282
          },
          {
            name: 'NCAA baseball tournament',
            value: 273
          },
          {
            name: 'Point Break',
            value: 265
          }
        ]
      }]

    }
  }
}
</script>

<style scoped>
.patent-hot-word1 {
  width: 800px;
  height: 800px;
}

</style>
