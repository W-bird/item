var lis = $(".ban-ul li"), //获取所有要轮播的li
	currIndex = 0,	//存放当前元素下标
	nextIndex = 1,	//存放即将轮播的元素下标
	circles = [],	//存放索引下标
	timer = null;	//定时器

//创建插入索引
for(var i=0; i<lis.length; i++) {
	var div_ = document.createElement("div");
	$(".index-ul-2").append(div_);
	circles.push(div_);
	div_.index = i;
	if (i == 0) {
		div_.className = "index-back";
	}
	$(div_).mouseenter(function() {
		var index = this.index;
		nextIndex = index;
		move();
	})
}

//设置索引中的文本
$(circles[0]).text("养护心脑血管");
$(circles[1]).text("认知白癜风");
$(circles[2]).text("春季腹泻");
$(circles[3]).text("药械批发采购");
$(circles[4]).text("APP首次下单");


timer = setInterval(move, 2000);	//自动轮播

//
function move() {
	$(lis[currIndex]).fadeOut(800);
	$(lis[nextIndex]).fadeIn(800);

	circles[currIndex].className = "";
	//切换小圆点颜色
	circles[nextIndex].className = "index-back";

	currIndex = nextIndex;
	nextIndex++;

	if (nextIndex >= lis.length) {
		nextIndex = 0;
	}
}

//鼠标移入在ul上事件
$(".ban-ul").mouseenter(function() {
	clearInterval(timer);
	$(".index-ul").css({"top":"360px"});
	$(".index-left,.index-right").css({"backgroundColor":"rgba(0,0,0,0.4)"});
});
//鼠标移出在ul上事件
$(".ban-ul").mouseleave(function() {
	clearInterval(timer);
	timer = setInterval(move, 2000);
	$(".index-ul").css({"top":"387px"});
	$(".index-left,.index-right").css({"backgroundColor":"rgba(200,200,200,0.4)"});
});

//鼠标移入在ad上事件
$(".ad").mouseenter(function() {
	$(".ad").css({"opacity":"1"});
});
//鼠标移出在ad上事件
$(".ad").mouseleave(function() {
	$(".ad").css({"opacity":"0.9"});
});


//点击向右事件
$(".index-right").click(function() {
	move()
})
//点击向左事件
$(".index-left").click(function() {
	nextIndex = currIndex-1;
	if (nextIndex < 0) {
		nextIndex = lis.length - 1;
	}
	move();
})