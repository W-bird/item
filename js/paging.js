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

$(".goodlist").on("click", "li .photo, li .txt", function() {
	
	var _jg = $(this).parent().find(".money").children("span").text(),		//获取商品价格
		_tp = $(this).parent().find(".photo").children("img").attr("src"),	//获取商品图片
		_pp = $(this).parent().find(".txt").children(".pp").text(),			//获取商品厂家
		_mc = $(this).parent().find(".txt").children(".mc").text(),			//获取商品名称
		_gg = $(this).parent().find(".st").children("span").text();			//获取商品规格
	console.log(_gg)

	$.cookie.json = true;
	var goods_2 = $.cookie("goods_2") || [];
	// console.log(_username)
	if (!(goods_2 != "")) {
		goods_2.push({_jg:_jg, _tp:_tp, _pp:_pp, _mc:_mc, _gg:_gg});
		// 配置读取或保存cookie时使用JSON格式
		$.cookie.json = true;
		
		// 将数据存入cookie 
		$.cookie("goods_2", goods_2, {expires:7, path:"/"});

		window.location = "goods_2.html";
	} else if(_mc !== goods_2[0]._mc){
		// 删除cookie
		goods_2.splice(0,1)
		goods_2.push({_jg:_jg, _tp:_tp, _pp:_pp, _mc:_mc, _gg:_gg});
		// 配置读取或保存cookie时使用JSON格式
		$.cookie.json = true;
		
		// 将数据存入cookie 
		$.cookie("goods_2", goods_2, {expires:7, path:"/"});
		window.location = "goods_2.html";
	} else{
		window.location = "goods_2.html";
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