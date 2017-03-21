$(".ckbox").click(function() {
	if($(".ck").hasClass("ck-back")){
		$(".ck").removeClass("ck-back");
	}else{
		$(".ck").addClass("ck-back");
	}
})