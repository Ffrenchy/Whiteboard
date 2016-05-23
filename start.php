<!DOCTYPE html>
<html>
<head>
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

Please login to use this system.
<?php
}
else 
{

echo 'Welcome '. $_SESSION['login']. '</br>';

$file_dir = "/var/www/html/uploads/".$_SESSION['login']."/";
$images = glob($file_dir."*.*");
$image_selected = str_replace("/var/www/html/", "", $images);



foreach($image_selected as $image) {
$file = str_replace("uploads/", "",$image);
echo '<a href="user.php/'.$file.'"> ';
echo '<img src="'.$image .'"  height="50" width="50"  /></a><br />';
}
 ?>
<form action="upload_photo.php" method="post" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form
<?php 
}
?>


</div>
</body>
<footer>
 Developed by: Eoin Ffrench Student number : 59683020 
</footer>
</html>


