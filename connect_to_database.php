<?php

$host="127.0.0.1"; // Host name 
$username="eoin"; // Mysql username 
$password="rosie101"; // Mysql password 
$db_name="login_user"; // Database name 
$tbl_name="entry"; // Table name 

// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");

// username and password sent from form 
$myusername=$_POST['login']; 
$mypassword=$_POST['password']; 

// To protect MySQL injection (more detail about MySQL injection)
$myusername = stripslashes($myusername);
$mypassword = stripslashes($mypassword);
$myusername = mysql_real_escape_string($myusername);
$mypassword = mysql_real_escape_string($mypassword);
$sql="SELECT * FROM $tbl_name WHERE username='$myusername' and password='$mypassword'";
$result=mysql_query($sql);

// Mysql_num_row is counting table row
$count=mysql_num_rows($result);
	
if($count==1){

session_start();
$_SESSION['login'] = $myusername;

header("location:connection.php");
}
else {
echo "Wrong Username or Password";
}
?>