<?php  
session_start();
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

echo '<img src="'.$location .'" height="50" width="50" /><br />';

include 'validate_access.php';
	if(check_access()){
	echo wooooo;
	}
}
else{
echo boo;
}
?>
