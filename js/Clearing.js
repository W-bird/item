//读取登录用户cookie
$.cookie.json = true; // 设置将字符串自动解析转换JS值
var _username = $.cookie("username") || [];
if (_username.length != 0) {
	$(".head-register").children('a,b').hide();
	$(".wcom").show().children('a').text(_username[0].name);
}


// 从cookie中读取保存选购商品的存储结构
var _goods = $.cookie("goods") || [];
if(_goods != ''){
	$(".info-num").text(_goods[0].amount);
	var zj = _goods[0]._goodPrice * _goods[0].amount;
	$(".info-money").text(zj)
	$(".info-name").text(_goods[0]._goodName);
	$(".info-gg").text(_goods[0]._goodNorms);
	$(".info-img").attr("src",_goods[0]._goodsImg);
	$(".goods-car").show();
	$(".ok").hide();
}


//鼠标移入网站导航显示
$(".head").on("mouseenter","#nav,.sub-nav", function() {
	$("#nav").css({"color":"#0cb95f"});
	$(".sub-nav").show();
	$(".nav").css({"backgroundPosition":"-136px 1px"});
	$(".li_nav").css({
		"backgroundColor":"#fff",
		"borderLeft":"1px solid #ccc",
		"borderRight":"1px solid #ccc",
		"width":"79px",
		"paddingLeft":"19px",
		"height":"41px"
	});
});

//鼠标移出网站导航隐藏
$(".head").on("mouseleave",".li_nav", function() {
	$("#nav").css({"color":"#333"});
	$(".sub-nav").hide();
	$(".nav").css({"backgroundPosition":"-121px 1px"});
	$(".li_nav").css({
		"backgroundColor":"#f4f4f4",
		"border":"none",
		"width":"80px",
		"paddingLeft":"20px",
		"height":"40px"
	});
})

//鼠标移入个人中心次级目录显示
$(".head").on("mouseenter",".head-gr", function() {
	$(".gr").css({"backgroundPosition":"-136px 1px"});
	$(".grzx").css({"color":"#0cb95f"});
	$(".head-gr").css({
		"border": "1px solid #ccc",
		"borderTop": "0",
		"width":"93px",
		"paddingRight":"1px",
		"marginLeft":"-1px",
		"background":"#fff"
	});
	$(".hide-gr").show();
	$(".head-gr s").hide();
});

//鼠标移出个人中心次级目录隐藏
$(".head").on("mouseleave",".head-gr", function() {
	$(".gr").css({"backgroundPosition":"-121px 1px"});
	$(".grzx").css({"color":"#666"});
	$(".head-gr").css({
		"border": "0",
		"width":"95px",
		"paddingRight":"0",
		"marginLeft":"0",
		"background":"#f4f4f4"
	});
	$(".hide-gr").hide();
	$(".head-gr s").show();
})

//鼠标移入微信查价显示
$(".head").on("mouseenter",".head-wx", function() {
	$(".left-WX").show();
})

//鼠标移出微信查价隐藏
$(".head").on("mouseleave",".head-wx", function() {
	$(".left-WX").hide(100);
})

//鼠标移入手机APP显示
$(".head").on("mouseenter",".head-App", function() {
	$(".left-APP").show();
})

//鼠标移出手机APP隐藏
$(".head").on("mouseleave",".head-App", function() {
	$(".left-APP").hide(100);
})

//点击确定按钮，删除cookie，显示购买完成
$(".gyes").click(function() {
	var _goods = $.cookie("goods") || [];
	// 删除cookie
	_goods.splice(_goods, 1);
	// 覆盖保存回cookie中
	$.cookie("goods", _goods, {expires:7, path:"/"});
	// 配置读取或保存cookie时使用JSON格式
	$.cookie.json = true;
	
	// 将数据存入cookie 
	$.cookie("goods", _goods, {expires:7, path:"/"});


	$(".goods-car").hide();
	$(".ok").show();
});

//点击取消，弹框，确定返回购物车
$(".gno").click(function() {
	if(confirm("确定取消购买，并返回购物车？")){
		window.location = "car.html";
	}
});


$(".quit").click(function() {
	console.log(8)
	var _username = $.cookie("username") || [];
	// 删除cookie
	_username.splice(_username, 1);
	// 覆盖保存回cookie中
	$.cookie("username", _username, {expires:7, path:"/"});
	// 配置读取或保存cookie时使用JSON格式
	$.cookie.json = true;
	
	// 将数据存入cookie 
	$.cookie("username", _username, {expires:7, path:"/"});

	window.location = "index.html"
});


//三级联动
var addresses = {};

/* 读取 address.json 中的所有省市区信息 */
$.ajax("../data/addresses.json").done(function(data){
	// console.log(data);
	var provinces = data.regions;
	provinces.forEach(function(province){
		addresses[province.name] = {}; // 保存省份下城市的对象
		var cities = province.regions || [];
		cities.forEach(function(city){
			addresses[province.name][city.name] = city.regions;
		});
	});
	initProvince();
});

// 设置省份的显示信息
function initProvince() {
	var html = "";
	html += "<option>-请选择-</option>";
	for (var attr in addresses) {
		html += "<option value='"+attr+"'>"+attr+"</option>";
	}
	$("#province").append(html);
}

// 设置选中省份下的城市显示信息
function initCity() {
	// 当前选中的省份
	var currProvince = $("#province").val();
	// 获取该省份的城市信息，并显示
	var cities = addresses[currProvince],
		html = "";
	html += "<option>-请选择-</option>";
	for (var attr in cities) {
		html += "<option value='"+ attr +"'>"+ attr +"</option>";
	}
	$("#city").empty().append(html);

	$("#city").show();

	$(".addr").val(currProvince)

	$("#province").nextAll(".oninfo-hint").show();
	$(".err").show();
}

//设置选中省份与城市下的区县信息
function initDistrict() {
	// 当前选中的省份与城市
	var currProvince = $("#province").val(),
		currCity = $("#city").val(),
		html = "";

	// 显示该选中城市下的区县
	var districts = addresses[currProvince][currCity] || [];
	html += "<option>-请选择-</option>";
	districts.forEach(function(district){
		html += "<option value='"+ district.name +"'>"+ district.name +"</option>";
	});

	$("#district").empty().append(html);
	$("#district").show();
	$(".addr").val(currProvince + currCity)
}

$(function() {
	// 当省份选择改变时：
	$("#province").change(initCity);
	// 当城市选择改变时：
	$("#city").change(initDistrict);
	//当区域发生改变时
	$("#district").change(function() {
		var currProvince = $("#province").val(),
			currCity = $("#city").val(),
			currDis = $("#district").val();
		$(".addr").val(currProvince + currCity +currDis)
		$(".addr").attr("disabled",false)
		$("#province").nextAll(".oninfo-hint").hide();
	});
	$(".addr").focus(function() {
		$(".addr").nextAll(".oninfo-hint").children('span').show();
		$(".addr").nextAll(".oninfo-hint").children('span').text('请输入完整的详细地址信息，两边不能有空符号')
	})
	$(".addr").blur(function() {
		var txt= $("#province").val() + $("#city").val() + $("#district").val();
		if ($(".addr").val() == txt) {
			$(".addr").nextAll(".oninfo-hint").children('span').text('请进一步完善您的地址')
		} else{
			$(".addr").nextAll(".oninfo-hint").children('span').hide();
		}
	});
})


console.log("%c https://www.baidu.com","color:red;font-size:80px")