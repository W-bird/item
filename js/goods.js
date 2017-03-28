//头部文件二级导航内容显示隐藏
$("#header").on("mouseenter", ".nav-link-first, .second-level", function() {
	$(".second-level").show();
});
$("#header").on("mouseleave", ".nav-link-first, .second-level", function() {
	$(".second-level").hide()
});

//放大镜
var lenWidth = $(".select").width(),
		lenHeight = $(".select").height(),
		middleWidth = $(".big").width(),
		middleHeight = $(".big").height(),
		bigWidth = $(".img-big").width(),
		bigHeight = $(".img-big").height(),
		rateX = bigWidth / lenWidth,
		rateY = bigHeight / lenHeight;

		var i = middleWidth * rateX ,
			j = middleHeight * rateY ;
$(".big").mousemove(function(e) {
	

		$(".big-image").css({width:i})
		$(".big-image").css({height:j})
			// 设置镜头在文档中的绝对位置，将光标指针保持在镜头中心
			$(".select").css({
				top:e.pageY - lenHeight *2,
				left:e.pageX - lenWidth / 2
			});
			// 限定镜头可移动的范围
			var _top = $(".select").offset().top,
				_left = $(".select").offset().left;
			if (_left < 0){
				_left = 0;
			} // 从左侧移出中图盒子范围
				

			 if (_left > middleWidth - lenWidth){
				_left = middleWidth - lenWidth;
			} // 从右侧超出
				
			if (_top < 0) {// 从上侧移出中图盒子范围
				_top = 0;
			}
			if (_top > middleHeight - lenHeight) 
			{// 从下边超出
				_top = middleHeight - lenHeight;
			}
			// 重新设置镜头定位位置
			$(".select").offset({
				top:_top,
				left:_left
			});

			var z = _top * rateY ;
			// 在放大效果区域定位大图的坐标
			$(".big-image").offset({top:-_top * rateY/4});
			$(".big-image").offset({left:-_left * rateX/4})  ;
		
});