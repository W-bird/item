<?php
	header("Access-Control-Allow-Origin:*"); // 允许跨域访问

	$username = $_POST['username'];
	$pwd = $_POST['pwd'];

	$conn = mysql_connect("localhost", "root", "");
	if (!$conn) {
		die("数据库连接出错");
	}
	mysql_select_db("yfw");
	
	$sql = "SELECT * from user WHERE username='$username' AND pwd='$pwd'";
	$result = mysql_query($sql, $conn);

	// 处理结果
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo '{"status":1, "message":"success", "userinfo":'. json_encode($row) .'}';
	}
	else{
		echo '{"status":0, "message":"用户名或密码错误"}';
	}

	// 关闭数据库连接
	mysql_close($conn);
?>