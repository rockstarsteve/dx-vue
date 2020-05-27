(function(){
  //rem是根据html的font-size来计算,1rem=1倍 html的font-size
  //em是根据标签的父标签来算
  function jsize(){
    var window_w = 0; //获取屏幕宽度,兼容各大浏览器的写法
    if(window.innerWidth){ //如果存在对象,
      window_w = window.innerWidth;
    }else if(  document.body&&document.body.clientWidth      ){
      window_w = document.body.clientWidth;
    }
    //var window_w = window.innerWidth || document.body&&document.body.clientWidth?document.body.clientWidth:0; //另外一种写法

    var base_width = 3840;//设计稿基础尺寸 / 2
    //图标要求在750下,是70px , width:7rem;
    var base_rempx = 100; //在750px的情况下,1rem要求=100px(为了好计算)
    //不能设置10的原因是某些浏览器只能识别最小12px

    var scaleSize = base_rempx * (window_w/base_width);
    //屏幕宽度除以 基础宽度 得出应该要缩放的倍数
    //再乘以期望1rem的像素值,得出最终要设置的font-size

    var html = document.querySelector('html'); //设置html标签的font-size
    html.style.fontSize = scaleSize+'px';

    document.querySelector('body').style.fontSize = '16px';
    //恢复body的文本尺寸

    // document.getElementById('debug').innerHTML = window_w;
  }
  //jsize(); //立即执行
  window.addEventListener('resize',function(){//重设屏幕宽度时执行
    jsize(); //重设时执行
  });
  window.addEventListener('DOMContentLoaded',function(){
    //DOMContentLoaded:文档加载完后执行; load:当window加载完毕后执行
    jsize();
  });
})();
/**
 * 重新适配浏览器分辨率
 * @param pxs 在base_width分辨率下的px
 * @returns {number} 实际屏幕下的分辨率
 */
function reSetPx(pxs){
  var window_w = 0; //获取屏幕宽度,兼容各大浏览器的写法
  if(window.innerWidth){ //如果存在对象,
    window_w = window.innerWidth;
  }else if(  document.body&&document.body.clientWidth      ){
    window_w = document.body.clientWidth;
  }
  var base_width = 3840;//设计稿基础尺寸
  return pxs*(window_w/base_width);
}



window.onload = function () {
  var imgArr = [
    {"path": "images/1.jpg"},
    {"path": "images/2.jpg"},
    {"path": "images/3.jpg"},
    {"path": "images/4.jpg"},
    {"path": "images/5.jpg"},
    {"path": "images/6.jpg"},
    {"path": "images/7.jpg"}
  ];
  var size = [
    {"bottom": 0, "left": 0, "width": 150, "height": 120, "zIndex": 1, "opacity": 100},
    {"bottom": 0, "left": 0, "width": 150, "height": 120, "zIndex": 2, "opacity": 100},
    {"bottom": 0, "left": 160, "width": 150, "height": 120, "zIndex": 3, "opacity": 100},
    {"bottom": 0, "left": 320, "width": 300, "height": 300, "zIndex": 4, "opacity": 100},
    {"bottom": 0, "left": 630, "width": 150, "height": 120, "zIndex": 3, "opacity": 100},
    {"bottom": 0, "left": 790, "width": 150, "height": 120, "zIndex": 2, "opacity": 100},
  ];
  var imgSum = imgArr.length;
  var wrap = document.getElementById('wrap');
  var cont = wrap.firstElementChild || wrap.firstChild;
  var btnArr = wrap.getElementsByTagName('a');
  var falg = true;
  var speed = 7000;
  for (var i = 0; i < imgSum; i++) {
    var lis = document.createElement('li');
    lis.style.backgroundImage='url('+imgArr[i].path+')';
    cont.appendChild(lis);
  }
  var liArr = cont.children;
  move();
  wrap.timer = setInterval(function () {
    move(true);
  }, speed);
  btnArr[1].onclick = function () {
    if (falg) {
      move(true);
    }
  }
  btnArr[0].onclick = function () {
    if (falg) {
      move(false);
    }
  }

  function move(bool) {
    if (bool != undefined) {
      if (bool) {
        size.unshift(size.pop());
      } else {
        size.push(size.shift());
      }
    }
    for (var i = 0; i < liArr.length; i++) {
      animate(liArr[i], size[i], function () {
        falg = true;
      });
    }
  }
}

function getStyle(obj,attr){
  return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,null)[attr];
}

function animate(obj,json,fn){
  clearInterval(obj.timer);
  obj.timer=setInterval(function(){
    var bool=true;
    for(var k in json){
      var leader;
      if (k=='opacity') {
        if (getStyle(obj,k)==undefined) {
          leader=100;
        }else {
          leader=parseInt(getStyle(obj,k)*100);
        }
      }else {
        leader=parseInt(getStyle(obj,k)) || 0;
      }
      var step=(json[k]-leader)/10;
      step=step>0?Math.ceil(step):Math.floor(step);
      leader=leader+step;
      if(k=='zIndex'){
        obj.style[k]=json[k];
      }else if(k=='opacity'){
        obj.style[k]=leader/100;
        obj.style.filter='alpha(opacity='+leader+')';
      }else {
        obj.style[k]=leader/100+'rem';
      }
      if(json[k]!=leader){
        bool=false;
      }
    }
    if(bool){
      clearInterval(obj.timer);
      if (fn) {
        fn();
      }
    }
  },10);
}
