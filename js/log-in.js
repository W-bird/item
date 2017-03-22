$(".ckbox").click(function() {
	if($(".ck").hasClass("ck-back")){
		$(".ck").removeClass("ck-back");
	}else{
		$(".ck").addClass("ck-back");
	}
})
$(".log").click(function() {
	var valname = $(".ipt-name").val();
	var valpwd = $(".ipt-pwd").val();
	if (valname != "" && valpwd != "") {
		console.log('成功')
		$(".text").hide();
	} else{
		console.log("失败");
		$(".text").show();
	}
})