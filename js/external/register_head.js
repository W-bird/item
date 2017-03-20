$.ajax({
	type:"get",
	url:"../html/external/register_head.html",
	dataType:"html",
	async:false,
	success:function(data){
		$("#head").append(data);
	}
});

$("#nav").mousemove(move).stop();
$("#nav").mouseout(out).stop();
$(".sub-nav").mousemove(move);
$(".sub-nav").mouseout(out);


function move() {
	$("#nav").css({"textDecoration":"none"});
	$(".nav").css({"backgroundPosition":"-136px 1px"});
	$(".li_nav").css({
		"backgroundColor":"#fff",
		"borderLeft":"1px solid #ccc",
		"borderRight":"1px solid #ccc",
		"width":"79px",
		"paddingLeft":"19px",
		"height":"42px"
	});
	$(".sub-nav").css({"display":"block"})
}

function out() {
	$(".nav").css({"backgroundPosition":"-121px 1px"});
	$(".li_nav").css({
		"backgroundColor":"#f4f4f4",
		"border":"none",
		"width":"80px",
		"paddingLeft":"20px",
		"height":"40px"
	});
	$(".sub-nav").css({"display":"none"})
}