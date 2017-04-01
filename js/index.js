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

//滚动到位置时显示收缩固定收缩框和楼梯
$(window).scroll(function() {
	var sorTop = $(this).scrollTop()
	if (sorTop >= 900) {
		$(".fixe-ss").slideDown(500);
		$(".fixe-back").slideDown(500);
		$(".fixe-stairs").fadeIn(500);
	} else if (sorTop <= 900) {
		$(".fixe-ss").slideUp(500);
		$(".fixe-back").slideUp(500);
		$(".fixe-stairs").fadeOut(500);
	}
	if (sorTop > 900 && sorTop < 1400) {
		$(".fixe-stairs").find('a').removeClass('back');
		$(".fixe-stairs li:first-child a").addClass('back');
	} else if (sorTop > 1400 && sorTop < 2000) {
		$(".fixe-stairs").find('a').removeClass('back');
		$(".fixe-stairs li:nth-child(2) a").addClass('back');
	}else if (sorTop > 2000 && sorTop < 2600) {
		$(".fixe-stairs").find('a').removeClass('back');
		$(".fixe-stairs li:nth-child(3) a").addClass('back');
	}else if (sorTop > 2600 && sorTop < 3300) {
		$(".fixe-stairs").find('a').removeClass('back');
		$(".fixe-stairs li:nth-child(4) a").addClass('back');
	}else if (sorTop > 3300 && sorTop < 3900) {
		$(".fixe-stairs").find('a').removeClass('back');
		$(".fixe-stairs li:nth-child(5) a").addClass('back');
	}else if (sorTop > 3900 && sorTop < 4500) {
		$(".fixe-stairs").find('a').removeClass('back');
		$(".fixe-stairs li:nth-child(6) a").addClass('back');
	}else if (sorTop > 4500 && sorTop < 5100) {
		$(".fixe-stairs").find('a').removeClass('back');
		$(".fixe-stairs li:nth-child(7) a").addClass('back');
	}else{
		$(".fixe-stairs").find('a').removeClass('back');
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

timer_3 = setInterval(move_3, 2000);



// /*tab区 轮播*/
var divs = $(".tab-div"),
	lias = $(".tab-ul li"),
	_name = 1,
	currIndex_4 = 0,
	nextIndex_4 = 1,
	timer_4 = null;

//开启轮播
timer_4 = setInterval(move_4, 2000)

//轮播函数
function move_4() {
	$(divs[currIndex_4]).fadeOut(800);
	$(divs[nextIndex_4]).fadeIn(800);

	$(lias[currIndex_4]).children('a').removeClass('tab-color');
	$(lias[nextIndex_4]).children('a').addClass('tab-color');

	currIndex_4 = nextIndex_4;
	nextIndex_4++;

	if (nextIndex_4 >= divs.length) {
		nextIndex_4 = 0;
	}
}

//鼠标滑过标签
$(lias).mouseenter(function() {
	var _index = $(this).attr("name");
	nextIndex_4 = _index -1;
	move_4()
});

//鼠标移入停止轮播
$(".tab-one").mouseenter(function() {
	clearInterval(timer_4);
});

//鼠标移除开始轮播
$(".tab-one").mouseleave(function() {
	timer_4 = setInterval(move_4, 2000)
});



//鼠标滑过 tab 时改变a标签样式
$(".title-right").on("mouseenter", "a", function() {
	var _right = $(this).parents(".tab").find('.contnet-right');
	$(_right).fadeOut(400);
	$(this).parent().children('a').removeClass('title-color')
	$(this).addClass('title-color')
	console.log(_right)
	var _a = $(this).attr("name")
	$(_right[_a]).fadeIn(400);
})


$(function(){
	//读取cookie
	$.cookie.json = true; // 设置将字符串自动解析转换JS值
	var _username = $.cookie("username") || [];
	if (_username.length != 0) {
		$(".head-register").children('a,b').hide();
		$(".wcom").show().children('a').text(_username[0].name);
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
