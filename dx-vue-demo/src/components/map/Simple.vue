<template>
  <div>
    <el-row>
      <el-col :offset="2" :span="18">
        <div id="map_canvas" class="allmap"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import BMap from 'BMap'

  export default {
    data() {
      return {
        address_detail: "", //详细地址
        userlocation: {lng: "", lat: ""},
        clearable: true,
        suggestId: "suggestId",
        map: {},
        mk: {}
      };
    },
    created() {

    },
    methods: {
      drawMap() {
        this.map = new BMap.Map("map_canvas");        // 创建地图实例
        this.map.addControl(new BMap.NavigationControl());      // 启用放大缩小 尺
        this.map.enableScrollWheelZoom();
        // this.getlocation();//获取当前坐标, 测试时获取定位不准。
        //
        // var point = new BMap.Point(this.userlocation.lng, this.userlocation.lat); // 创建点坐标
        // this.map.centerAndZoom(point, 13);         // 初始化地图，设置中心点坐标和地图级别
        // var marker = new BMap.Marker(point);    // 创建标注
        // this.map.addOverlay(marker);           // 将标注添加到地图中
        //
        // var ac = new BMap.Autocomplete({
        //   //建立一个自动完成的对象
        //   input: "suggestId",
        //   location: this.map
        // });
        // var myValue;
        // ac.addEventListener("onconfirm", (e) => {
        //   //鼠标点击下拉列表后的事件
        //   var _value = e.item.value;
        //   myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        //   this.address_detail = myValue;
        //   this.setPlace();
        // });
      },
      getMarker(point) {
        this.mk = new BMap.Marker(point);
        this.mk.addEventListener("dragend", this.showInfo);
        this.mk.enableDragging();  //可拖拽
        this.getAddress(point);
        this.map.addOverlay(this.mk);//把点添加到地图上
        this.map.panTo(point);
      },

    },
    mounted() {
      this.$nextTick(function () {
        this.drawMap();
      });
    }
  }
</script>
<style scoped>
  .allmap {
    width: 100%;
    height: 400px;
    font-family: "微软雅黑";
    border: 1px solid green;
  }

  .el-tag {
    cursor: pointer;
  }
</style>
