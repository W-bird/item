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

// 先从cookie中读取保存选购商品的存储结构
var _goods = $.cookie("goods") || [];
if(_goods != ''){
	var _amount = 0;
	for(var i=0; i<_goods.length; i++) {
		_amount += _goods[i].amount;
		// return _amount;
	}
	$("#fixation").find(".i2").children('b').text(_amount);
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
		if($("#header").find(".head-register").children('.wcom').is(':hidden')){
			alert("请先登录");
		} else{
			// $('body').animate({scrollTop:0}, 0);
			//飞入购物车
			var imgSrc = $("._goodsImg").attr("src");
			var $fly = $("<img src='"+ imgSrc +"' style='width:30px; height:30px; position:absolute'>");
			var cartOffset = $("#fixation").find(".i2").offset();

			$fly.fly({
				start : {
					top : e.pageY - $(window).scrollTop(),
					left : e.pageX
				},
				end : {
					top : cartOffset.top - $(window).scrollTop(),
					left : cartOffset.left,
					width : 10,
					height : 10
				}
			});

			//保存cookie
			var _goodName = $(".goodName").text();
			var _goodPrice = $("._goodPrice").text();
			var _goodNorms = $("._goodNorms").text();
			var _goodsImg = $("._goodsImg").attr("src");

			$.cookie.json = true;
			// 获取当前选购商品在数组中的索引
			var index = exists(_goodName, _goods);
			if (index === -1) // 以前未购买，将当前选购商品保存到数组结构中
				_goods.push({_goodName:_goodName, amount:1, _goodPrice:_goodPrice, _goodNorms:_goodNorms, _goodsImg:_goodsImg});
			else // 已购买
				_goods[index].amount++;
			// 将数组结构存入cookie
			$.cookie("goods", _goods, {expires:7, path:"/"});

			// 查找_id指定的商品在array数组中是否存在
			// 如果存在，则返回其在数组中的索引，否则返回-1
			function exists(_id, array) {
				for (var i = 0, len = array.length; i < len; i++) {
					if (array[i]._goodName === _goodName) {
						return i;
					}
				}
				return -1;
			}
			var _amount = 0;
			for(var i=0; i<_goods.length; i++) {
				_amount += _goods[i].amount;
				// return _amount;
			}
			$("#fixation").find(".i2").children('b').text(_amount);
		}
	})
});


/*从 cookie 中拿商品数据*/
$(function() {
	var goods_2 = $.cookie("goods_2") || [];
	if(goods_2 != ''){
		$(".details").find(".big").children("img:first-child").attr("src",goods_2[0]._tp);
		$(".details").find(".img-big").children("img:first-child").attr("src",goods_2[0]._tp);
		$(".details").find(".samll-imgbox").find("img").attr("src",goods_2[0]._tp);

		$(".details").find(".goodName").text(goods_2[0]._mc)
		$(".details").find(".goodPp").text(goods_2[0]._pp)
		$(".details").find("._goodNorms").text(goods_2[0]._gg)
		$(".details").find("._goodPrice").text(goods_2[0]._jg)
	}
})

// 先从cookie中读取保存选购商品的存储结构
var _goods = $.cookie("goods") || [];
if(_goods != ''){
	var _amount = 0;
	for(var i=0; i<_goods.length; i++) {
		_amount += _goods[i].amount;
	}
	$("#fixation").find(".i2").children('b').text(_amount);
}
