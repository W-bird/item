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

//自动轮播函数
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

//滚动到位置时显示收缩固定收缩框
$(window).scroll(function() {
	var sorTop = $(this).scrollTop()
	if (sorTop >= 900) {
		$(".fixe-ss").slideDown(500);
		$(".fixe-back").slideDown(500);
	} else if (sorTop <= 900) {
		$(".fixe-ss").slideUp(500);
		$(".fixe-back").slideUp(500);
	}
});


// tab 内部轮播
var lis_odd = $(".content-left-ul li:odd"),
	lis_even = $(".content-left-ul li:even"),
	timer_2 = null;	//定时器
timer_2 = setInterval(move_2, 3000);	//自动轮播
//自动轮播函数
function move_2() {
	var _num = 0;
	if (_num === 0) {
		$(lis_odd).fadeOut(800);
		$(lis_even).fadeIn(800);
		_num = 1;
		setTimeout(function() {
			if (_num === 1) {
				_num = 0;
				$(lis_even).fadeOut(800);
				$(lis_odd).fadeIn(800);
			}
		}, 1500)
		
	}
}
// 鼠标移上停止轮播
$(".content-left-ul").mouseenter(function() {
	clearInterval(timer_2);
})
// 鼠标移出开始轮播
$(".content-left-ul").mouseleave(function() {
	timer_2 = setInterval(move_2, 3000);
})



//评论纵向轮播
var num = 1,
	timer_3 = null,
	liss = $(".discuss-ul li");

function move_3(){
	var	_top = -num * 220 + "px",
		cloneLi = $(".discuss-ul li:nth-child(1), .discuss-ul li:nth-child(2)").clone();
	$(".discuss-ul").animate({marginTop : _top}, 500);

	setTimeout(function() {
		$(".discuss-ul").append(cloneLi);
		$(".discuss-ul li:lt(2)").remove();
		$(".discuss-ul").css({marginTop:"0"})
	}, 600)
}

timer_3 = setInterval(move_3, 2000)



//鼠标滑过 tab 时改变a标签样式
$(".title-right").on("mouseenter", "a", function() {
	$(this).parent().children('a').removeClass('title-color')
	$(this).addClass('title-color')
})