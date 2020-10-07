<?php
  header("Content-type:text/html;charset=utf-8");

  //模拟官方的返回，生成对应的内容
  $responseData = array("code" => 0, "msg" => "");

  $username = $_POST['username'];
  $password = $_POST['password'];
  $createtime = $_POST['createTime'];
  $repassword = $_POST['repassword'];

  if(!$username){
    $responseData['code'] = 1;
    $responseData['msg'] = "用户名不能为空";
    echo json_encode($responseData);
    exit;
  }

  if(!$password){
    $responseData['code'] = 2;
    $responseData['msg'] = "密码不能为空";
    echo json_encode($responseData);
    exit;
  }

  if($repassword !== $password){
    $responseData['code'] = 3;
    $responseData['msg'] = "两次密码不一致";
    echo json_encode($responseData);
    exit;
  }

$link = mysql_connect("127.0.0.1" , "root" , "9.9");
if(!$link){
    $responseData['code'] = 4 ; 
    $responseData['msg'] = '服务器忙';
    echo json_encode($responseData);
    exit;
}
mysql_set_charset($link , 'utf-8');
mysql_select_db($link , 'rgister');
$sql = "SELECT * FROM users WHERE username = '${username}'";
$res = mysql_query($link , $sql);
$row = mysql_fetch_assoc($res);
if($row){
    $responseData['code'] = 5 ;
    $responseData['msg'] = '用户名已存在';
    echo json_encode($responseData);
    exit;
}
$password = md5($password);
$sql2 = "INSERT INTO users(username,password,createtime) VALUES('${username}','{$password}',{$createtime})";
$res = mysqli_query($link, $sql2);

  if(!$res){
    $responseData['code'] = 6;
    $responseData['msg'] = "注册失败";
    echo json_encode($responseData);
    exit;
  }

  $responseData['msg'] = "注册成功";
  echo json_encode($responseData);


  //8、关闭数据库
  mysqli_close($link);


?>