(function () {
	function jsize() {
		//TODO 修改下面的屏幕宽度
		var base_width = 1920;
		console.log("宽度是：", window.outerWidth)
		var window_w = window.innerWidth || document.body && document.body.clientWidth ? document.body.clientWidth : 0; //另外一种写法
		var base_rempx = 100; //在1920px的情况下,1rem要求=100px(为了好计算)

		var scaleSize = base_rempx * (window_w / base_width);
		var html = document.querySelector('html');
		html.style.fontSize = scaleSize + 'px';
		document.querySelector('body').style.fontSize = '16px';
	}
	window.addEventListener('resize', function () {
		jsize();
	});
	window.addEventListener('DOMContentLoaded', function () {
		jsize();
	});
})();




/**
 * 重新适配浏览器分辨率
 * @param pxs 在base_width分辨率下的px
 * @returns {number} 实际屏幕下的分辨率
 */
function reSetPx(pxs) {

	var window_w = 0; //获取屏幕宽度,兼容各大浏览器的写法
	if (window.innerWidth) { //如果存在对象,
		window_w = window.innerWidth;
	} else if (document.body && document.body.clientWidth) {
		window_w = document.body.clientWidth;
	}

	var base_width = 1920;//设计稿基础尺寸

	return pxs * (window_w / base_width);
}

