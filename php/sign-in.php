<?php
	header("Access-Control-Allow-Origin:*"); // 允许跨域访问

	$username = $_POST['username'];
	$pwd = $_POST['pwd'];
	$phone = $_POST['phone'];

	$conn = mysql_connect("localhost", "root", "");
	if (!$conn) {
		die("数据库连接出错");
	}
	mysql_select_db("yfw");
	
	$sql = "INSERT INTO user VALUES(NULL, '$username', '$pwd', '$phone')";
	$result = mysql_query($sql, $conn);

	// 处理结果
	if ($result){
		echo '{"status":1, "message":"success"}';
	}
	else{
		echo '{"status":0, "message":"'. mysql_error() .'"}';
	}

	// 关闭数据库连接
	mysql_close($conn);
?>