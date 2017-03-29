var regs = {
	name: /^[^!@#$%^&*():;''"",./?+_=-\\`~|]{2,18}$/,	//判断用户名
	pwd: /^[^ ]{6,20}$/,								//判断密码
	phone: /^1[34578]\d{9}$/,							//判断手机号码
	realityname: /^([\u4e00-\u9fa5]|[a-zA-Z]){2,16}$/,		//判断真实姓名
	email: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,			//判断邮箱
	section: /^\d{3,4}$/,									//判断区号
	dial: /^\d{7,8}$/										//判断直播号
}

//必填项输入框获取焦点
$(".span-text").focus(function() {
	$(this).parent().next(".oninfo-hint").children('span').show();
	$(this).parent().next(".oninfo-hint").show();
	$(this).parent().next(".oninfo-hint").addClass('focus');
	$(this).parent().next(".oninfo-hint").removeClass('err ok');
})

//必填项输入框失去焦点
$(".span-text").blur(function() {
	if($(this).attr("name") == "username"){		//判断用户名
		var b = this;
		regExps(regs.name, b);
	}else if($(this).attr("name") == "pwd"){	//判断密码
		var b = this;
		regExps(regs.pwd, b);
	} else if ($(this).attr("name") == "pwd2") {	//验证密码
		if($(this).val() === $(".pwd").val() && $(this).val() != ""){
			$(this).parent().next(".oninfo-hint").children('span').hide();
			$(this).parent().next(".oninfo-hint").addClass('ok');
			$(this).parent().next(".oninfo-hint").removeClass('focus');
		} else{
			$(this).parent().next(".oninfo-hint").addClass('err');
			$(this).parent().next(".oninfo-hint").removeClass('focus');
		}
	} else if($(this).attr("name") == "phone"){		//判断手机号码
		var b = this;
		regExps(regs.phone, b);
	}
})

//验证函数
function regExps(a, b){
	if(a.test($(b).val())) {
		$(b).parent().next(".oninfo-hint").children('span').hide();
		$(b).parent().next(".oninfo-hint").addClass('ok');
		$(b).parent().next(".oninfo-hint").removeClass('focus');
	} else{
		$(b).parent().next(".oninfo-hint").addClass('err');
		$(b).parent().next(".oninfo-hint").removeClass('focus');
	}
}

//选填项输入框获取焦点
$(".elect").focus(function() {
	$(this).next(".oninfo-hint").children('span').show();
	$(this).next(".oninfo-hint").show();
	$(this).next(".oninfo-hint").addClass('focus');
	$(this).next(".oninfo-hint").removeClass('err ok');
})

//选填项输入框失去焦点
$(".elect").blur(function() {
	if ($(this).val() != "") {		//判断是否为空
		if ($(this).attr("name") == "realityname") {	//判断真实姓名
			var b = this;
			regElect(regs.realityname, b);
		}else if ($(this).attr("name") == "email") {	//判断邮箱
			var b = this;
			regElect(regs.email, b);
		}else if ($(this).attr("name") == "section") {	//判断电话区号
			if (regs.section.test($(this).val())) {
				$(this).next(".oninfo-hint").hide();
			} else{
				$(this).next(".oninfo-hint").addClass('err');
				$(this).next(".oninfo-hint").removeClass('focus');
			}
		} else if ($(this).attr("name") == "dial") {	//判断直播号
			var b = this;
			regElect(regs.dial, b);
		}
	} else{
		$(this).next(".oninfo-hint").hide();
	}
})

//验证函数
function regElect(a, b){
	if(a.test($(b).val())) {
		$(b).next(".oninfo-hint").children('span').hide();
		$(b).next(".oninfo-hint").addClass('ok');
		$(b).next(".oninfo-hint").removeClass('focus');
	} else{
		$(b).next(".oninfo-hint").addClass('err');
		$(b).next(".oninfo-hint").removeClass('focus');
	}
}


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
	});
})