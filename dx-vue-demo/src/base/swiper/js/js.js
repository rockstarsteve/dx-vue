window.onload=function(){
    var imgArr=[
        {"path":"images/1.jpg"},
        {"path":"images/2.jpg"},
        {"path":"images/3.jpg"},
        {"path":"images/4.jpg"},
        {"path":"images/5.jpg"},
        {"path":"images/6.jpg"},
        {"path":"images/7.jpg"}
    ];
    var size=[
        {"bottom":0,"left":0,"width":493,"height":656,"zIndex":1,"opacity":100},
        {"bottom":0,"left":545,"width":493,"height":656,"zIndex":2,"opacity":100},
        {"bottom":0,"left":1090,"width":1113,"height":1482,"zIndex":4,"opacity":100},
        {"bottom":0,"left":2255,"width":493,"height":656,"zIndex":3,"opacity":100},
        {"bottom":0,"left":2852,"width":493,"height":656,"zIndex":3,"opacity":100},
    ];
    var imgSum=imgArr.length;
    var wrap=document.getElementById('wrap');
    var cont=wrap.firstElementChild || wrap.firstChild;
    var falg=true;
    var speed=7000;
    for (var i=0;i<imgSum;i++) {
        console.log(imgSum)
        var lis=document.createElement('li');
        lis.style.backgroundImage='url('+imgArr[i].path+')';
        cont.appendChild(lis);
    }
    var liArr=cont.children;
    move();
    wrap.timer=setInterval(function(){
        move(true);
    },speed);
    document.getElementById("sw_next").onclick=function(){
        if (falg) {
            move(true);
        }
    }
    document.getElementById("sw_prev").onclick=function(){
        if (falg) {
            move(false);
        }
    }
    function move(bool){
        if(bool!=undefined){
            if(bool){
                size.unshift(size.pop());
            }else {
                size.push(size.shift());
            }
        }
        for (var i=0;i<liArr.length;i++) {
            animate(liArr[i],size[i],function(){
                falg=true;
            });
        }
    }
}
