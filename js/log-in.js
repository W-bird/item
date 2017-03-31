var _ckd = false;

$(".ckbox").click(function() {
	if(_ckd){
		$(".ck").removeClass("ck-back");
		return _ckd = false;
	}else{
		$(".ck").addClass("ck-back");
		return _ckd = true;
	}
})
$(".log").click(function() {
	if ($(".ipt-name").val() != '') {
		$.post('http://localhost/items/item/php/log-in.php', {username:$(".ipt-name").val(), pwd:$(".ipt-pwd").val()}, 
			function(data) {
				if (data.status === 1) {
					var name = $(".ipt-name").val(),
						num = 0;
					// if (_ckd) {
					// 	num = 7;
					// }
					$.cookie.json = true;
					var _username = $.cookie("username") || [];
					console.log(_username)
					console.log(typeof _username)
					console.log(!(_username != ""))
					if (!(_username != "")) {
						_username.push({name:name});
						// 配置读取或保存cookie时使用JSON格式
						$.cookie.json = true;
						
						// 将数据存入cookie 
						$.cookie("username", _username, {expires:7, path:"/"});
						//跳转到首页
						window.location = "index.html";
					} else if(name !== _username[0].name){
						// 删除cookie
						_username.splice(0,1)
						_username.push({name:name});
						// 配置读取或保存cookie时使用JSON格式
						$.cookie.json = true;
						
						// 将数据存入cookie 
						$.cookie("username", _username, {expires:7, path:"/"});
						//跳转到首页
						window.location = "index.html";
					} else{
						window.location = "index.html";
					}
				} else{
					$(".text").show();
					$(".text").children('span:last-child').text("用户名或密码错误");
				}
			},"json"
		);
	}else{
		$(".text").show();
	}
})
