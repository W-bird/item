//头部文件二级导航内容显示隐藏
$("#header").on("mouseenter", ".nav-link-first, .second-level", function() {
	$(".second-level").show();
});
$("#header").on("mouseleave", ".nav-link-first, .second-level", function() {
	$(".second-level").hide()
});

//读取cookie
$.cookie.json = true; // 设置将字符串自动解析转换JS值
var _username = $.cookie("username") || [];
if (_username.length != 0) {
	$(".head-register").children('a,b').hide();
	$(".wcom").show().children('a').text(_username[0].name);
}

//放大镜
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


//添加到购物车效果
$(function(){
	$(".go_car").click(function(e){
		$('body').animate({scrollTop:0}, 0);
		//飞入购物车
		var $fly = $("<img src='../imgs/goods/ad5156de-c48b-49c2-98e8-f1b44f6281704946.jpg_syp.jpg' style='width:30px; height:30px; position:absolute'>");
		var cartOffset = $("#fixation").find(".i2").offset();

		$fly.fly({
			start : {
				top : e.pageY,
				left : e.pageX
			},
			end : {
				top : cartOffset.top,
				left : cartOffset.left,
				width : 10,
				height : 10
			}
		});

	})
});
