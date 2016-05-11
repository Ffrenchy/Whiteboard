<?php
function verifiy($user){

$host="127.0.0.1"; // Host name 
$username="eoin"; // Mysql username 
$password="rosie101"; // Mysql password 
$db_name="login_user"; // Database name 
$tbl_name="entry"; // Table name 

// Connect to server and select databse.
mysql_connect("$host", "$username", "$password")or die("cannot connect"); 
mysql_select_db("$db_name")or die("cannot select DB");


// To protect MySQL injection (more detail about MySQL injection)
$myusername = stripslashes($user);
$myusername = mysql_real_escape_string($user);
$sql="SELECT * FROM $tbl_name WHERE username='$myusername'";
$result=mysql_query($sql);

// Mysql_num_row is counting table row
$count=mysql_num_rows($result);
	
if($count==1){
return true;
}
else {
return false;
}

}
?>
