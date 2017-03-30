<?php
	header("Access-Control-Allow-Origin:*"); // 允许跨域访问

	$username = $_GET['username'];

	$conn = mysql_connect("localhost", "root", "");
	if (!$conn) {
		die("数据库连接出错");
	}
	mysql_select_db("yfw");

	$sql = "SELECT COUNT(*) from user WHERE username='$username'";
	$result = mysql_query($sql, $conn);

	// 处理查询结果
	if ($row = mysql_fetch_array($result)) {
		if ($row[0] >= 1) { // 已经有该用户存在
			echo '{"status":1, "message":"user exists"}';
		} else { // 不存在该注册用户
			echo '{"status":0, "message":"user not exists"}';
		}
	}
	// 数据库关闭
	mysql_close($conn);

?>