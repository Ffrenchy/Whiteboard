<!DOCTYPE html>
<html>
<head>
<script src="Scripting.js" ></script>
<script src="raphael-min.js"  ></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

<body>

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
<?php 
session_start();
if(!isset($_SESSION['login'])) {
?>	

<form name="entry_form" method="post" action="make_user.php">
Login:<input type="text" name="login"></br>
Password:<input type="text" name="password"></br>
Confirm password:<input type="text" name="password2"></br>
<input type="submit" name="Submit" value="Login">
</form>
<?php
}
else 
{
?>

<p><strong>Warning:</strong> Please logout if you wish to login.</p>

<?php } ?>



</div>
</body>
<footer>
 Developed by: Eoin Ffrench Student number : 59683020 
</footer>
</html>


