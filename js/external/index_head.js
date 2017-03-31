$("#header").load("../html/external/index_head.html");


//读取cookie
$.cookie.json = true; // 设置将字符串自动解析转换JS值
var _username = $.cookie("username") || [];
if (_username.length != 0) {
	$(".head-register").children('a,b').hide();
	$(".wcom").show().children('a').text(_username[0].name);
	$(".head-register").find(".quit").show();
}


//鼠标移入网站导航显示
$("#header").on("mouseenter","#nav,.sub-nav", function() {
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
$("#header").on("mouseleave",".li_nav", function() {
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
$("#header").on("mouseenter",".head-gr", function() {
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
$("#header").on("mouseleave",".head-gr", function() {
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
$("#header").on("mouseenter",".head-wx", function() {
	$(".left-WX").show();
})

//鼠标移出微信查价隐藏
$("#header").on("mouseleave",".head-wx", function() {
	$(".left-WX").hide(100);
})

//鼠标移入手机APP显示
$("#header").on("mouseenter",".head-App", function() {
	$(".left-APP").show();
})

//鼠标移出手机APP隐藏
$("#header").on("mouseleave",".head-App", function() {
	$(".left-APP").hide(100);
})

//二级导航滑过效果
$("#header").on("mouseenter",".second-ul li, .s", function() {
	$(".second-ul").css({"background": "rgba(255,255,255,1)"});
})
$("#header").on("mouseleave",".second-ul li, .s", function() {
	$(".second-ul").css({"background": "rgba(255,255,255,0.8)"});
})

//中西药品滑过效果
$("#header").on("mouseenter",".zxyp,.s1", function() {
	$(".s1").show();
	$(".zxyp").css({"borderBottom":"1px solid #e5e5e5","borderRight":"0","background":"#f4f4f4"});
})
$("#header").on("mouseleave",".zxyp,.s1", function() {
	$(".s1").hide();
	$(".zxyp").css({"borderBottom":"1px dashed #e5e5e5","background":"rgba(255,255,255,0)","borderRight":"1px solid #e5e5e5"});
})

//医疗器械滑过效果
$("#header").on("mouseenter",".ylqx,.s2", function() {
	$(".s2").show();
	$(".ylqx").prev().css({"borderBottom":"1px solid #e5e5e5"});
	$(".ylqx").css({"borderBottom":"1px solid #e5e5e5","borderRight":"0","background":"#f4f4f4"});
})
$("#header").on("mouseleave",".ylqx,.s2", function() {
	$(".s2").hide();
	$(".ylqx").css({"borderBottom":"1px dashed #e5e5e5","background":"rgba(255,255,255,0)","borderRight":"1px solid #e5e5e5"});
	$(".ylqx").prev().css({"borderBottom":"1px dashed #e5e5e5"});
})

//养生保健品滑过效果
$("#header").on("mouseenter",".ysbj,.s3", function() {
	$(".s3").show();
	$(".ysbj").prev().css({"borderBottom":"1px solid #e5e5e5"});
	$(".ysbj").css({"borderBottom":"1px solid #e5e5e5","borderRight":"0","background":"#f4f4f4"});
})
$("#header").on("mouseleave",".ysbj,.s3", function() {
	$(".s3").hide();
	$(".ysbj").css({"borderBottom":"1px dashed #e5e5e5","background":"rgba(255,255,255,0)","borderRight":"1px solid #e5e5e5"});
	$(".ysbj").prev().css({"borderBottom":"1px dashed #e5e5e5"});
})


//计生用品滑过效果
$("#header").on("mouseenter",".jsyp,.s4", function() {
	$(".s4").show();
	$(".jsyp").prev().css({"borderBottom":"1px solid #e5e5e5"});
	$(".jsyp").css({"borderBottom":"1px solid #e5e5e5","borderRight":"0","background":"#f4f4f4"});
})
$("#header").on("mouseleave",".jsyp,.s4", function() {
	$(".s4").hide();
	$(".jsyp").css({"borderBottom":"1px dashed #e5e5e5","background":"rgba(255,255,255,0)","borderRight":"1px solid #e5e5e5"});
	$(".jsyp").prev().css({"borderBottom":"1px dashed #e5e5e5"});
})

//中药饮片滑过效果
$("#header").on("mouseenter",".zyyp,.s5", function() {
	$(".s5").show();
	$(".zyyp").prev().css({"borderBottom":"1px solid #e5e5e5"});
	$(".zyyp").css({"borderBottom":"1px solid #e5e5e5","borderRight":"0","background":"#f4f4f4"});
})
$("#header").on("mouseleave",".zyyp,.s5", function() {
	$(".s5").hide();
	$(".zyyp").css({"borderBottom":"1px dashed #e5e5e5","background":"rgba(255,255,255,0)","borderRight":"1px solid #e5e5e5"});
	$(".zyyp").prev().css({"borderBottom":"1px dashed #e5e5e5"});
})

//美容护肤滑过效果
$("#header").on("mouseenter",".mrhf,.s6", function() {
	$(".s6").show();
	$(".mrhf").prev().css({"borderBottom":"1px solid #e5e5e5"});
	$(".mrhf").css({"background":"#f4f4f4","borderRight":"0"});
})
$("#header").on("mouseleave",".mrhf,.s6", function() {
	$(".s6").hide();
	$(".mrhf").prev().css({"borderBottom":"1px dashed #e5e5e5"});
	$(".mrhf").css({"background":"rgba(255,255,255,0)","borderRight":"1px solid #e5e5e5"});
})


$("#header").on("click",".quit", function() {
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