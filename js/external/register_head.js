//引入外部文件到 head 标签中
$("#head").load("../html/external/register_head.html", function() {
	var str = window.location.href;
	var nn = str.lastIndexOf("/");
	var ntr  = str.substring(nn+1);
	if (ntr == "log-in.html") {
		$("#logo-p").text("用户登录");
	} else if (ntr == "sign-in.html") {
		$("#logo-p").text("用户注册");
	} else if (ntr == "firm-sign-in.html") {
		$("#logo-p").text("企业注册");
	}
});

//鼠标移入显示
$("#head").on("mouseenter","#nav,.sub-nav", function() {
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

//鼠标移出隐藏
$("#head").on("mouseleave",".li_nav", function() {
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