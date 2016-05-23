<!DOCTYPE html>
<html>
<head>
<script src="../../Scripting.js" ></script>
<script src="../../raphael-min.js"  ></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="../../mystyle.css">

</head>

<body onload="myFunction()">

<div id="header">
<h1>Whiteboard website</h1>
<ul>
  <li><a href="index.php">Homepage</a></li>
  <li><a href="#news">FAQ</a></li>
  <li><a href="start.php">My dashboard </a></li>
</ul>


<?php 
session_start();
if(isset($_SESSION['login'])) {
?>	
<div id="logged_in">
Welcome
<?php echo $_SESSION['login'] ?>
<form name="entry_form" method="post" action="destroy_session.php">
<input type="submit" value="Logout">
</form>

</div>
<?php
}
else 
{
?>
<div id="login">
<form name="entry_form" method="post" action="connect_to_database.php">
Login:<input type="text" name="login" id="arrange"></br>
Password:<input type="text" name="password" id="arrange"></br>
<input type="submit" name="Submit" value="Login" >
</form>
<input type="submit" name="Submit" value="Create User" id="arranged"></br>
<form action="create_user.php">
<input type="submit" name="Submit" value="Create User" id="arranged">
</form>
</div>
</div>
<?php } ?>
</div>
</br>
<div id="content">




</div>


<?php  		



$url = $_SERVER['REQUEST_URI'];
$answer =  explode ("/" , $url);
$user = $answer[2];
$image = $answer[3];

include 'check_user.php';
if(verifiy($user)){

echo 'user is on the system </br>';
}
else{
echo 'doesnt exist';
}
$location = ("/var/www/html/uploads/".$user."/".$image);
if(file_exists ($location)){
$location = str_replace("/var/www/html", "", $location);

echo '<img src="'.$location .'"  id="pic"  /><br />';

include 'validate_access.php';
	if(check_access()){
	
	}
}
else{
echo boo;
}


?>
</div>
<div id="content">
<div id="paper1" class="board" >
</div>
</div>
</div>
</body>
<footer>
 Developed by: Eoin Ffrench Student number : 59683020 
</footer>
</html>


</body>
</html>
