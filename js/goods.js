//头部文件二级导航内容显示隐藏
$("#header").on("mouseenter", ".nav-link-first, .second-level", function() {
	$(".second-level").show();
});
$("#header").on("mouseleave", ".nav-link-first, .second-level", function() {
	$(".second-level").hide()
});

//放大镜
// var selectBox =  document.getElementsByClassName("select")[0];
// var bigBox = document.getElementsByClassName("big")[0];

// console.log(bigBox);

// bigBox.onmouseover = function() {
// 	bigBox.onmousemove = function(e) {
// 		e = e || window.event;
// 		var _left = e.clientX-bigBox.offsetLeft-selectBox.offsetWidth/2;
// 		var _top = e.clientY-bigBox.offsetTop-selectBox.offsetHeight/2;
// 		// console.log(_left+ " " +_top)
// 		if (_top < 0) {
// 			_top = 0;
// 		}
// 		if (_top > (bigBox.offsetHeight - selectBox.offsetHeight)) {
// 			_top = bigBox.offsetHeight - selectBox.offsetHeight;
// 		}
// 		if (_left < 0) {
// 			_left = 0;
// 		}
// 		if (_left > (bigBox.offsetWidth - selectBox.offsetWidth)) {
// 			left = bigBox.offsetWidth - selectBox.offsetWidth;
// 		}

// 		selectBox.style.cssText = "left:"+_left+"px;top: "+_top+"px;"
// 	}
// }

var leftBox = document.getElementsByClassName("big")[0];
var rightBox = document.getElementsByClassName("img-big")[0];
var lj = document.getElementsByClassName('select')[0];
var maxImg = document.getElementsByClassName('big-image')[0];
var bigBox = document.getElementsByClassName('img-big')[0];
var mask = document.getElementsByClassName("mask")[0];
mask.onmouseover  = function() {
	leftBox.onmousemove = function(e){
		var e = e||window.event;
		var posx = e.offsetX-lj.offsetWidth/2;
		var posy = e.offsetY-lj.offsetHeight/2;
		console.log(leftBox.offsetTop);
		if(posy<0){
			posy=0;
			
		}
		if(posy>leftBox.offsetHeight-lj.offsetHeight-2){
			posy=leftBox.offsetHeight-lj.offsetHeight-2;
		}
		if (posx < 0) {
			posx = 0;
		}
		if (posx > leftBox.offsetWidth-lj.offsetWidth) {
			posx = leftBox.offsetWidth-lj.offsetWidth
		}
		// console.log(posx, posy);
		lj.style.cssText = "display: block;left:"+posx+"px;top: "+posy+"px;";
		var powx =(maxImg.offsetWidth-rightBox.offsetWidth)/(leftBox.offsetWidth-lj.offsetWidth);
		var powy = (maxImg.offsetHeight-rightBox.offsetHeight)/(leftBox.offsetHeight-lj.offsetHeight);
		// console.log(powx+" "+powy)
		maxImg.style.cssText = "left:"+posx*powx*-1+"px;top: "+posy*powy*-1+"px;";
		bigBox.style.display = "block";
	}
}
leftBox.onmouseleave = function() {
	bigBox.style.display = "none";
	lj.style.cssText = "display: none;";
}