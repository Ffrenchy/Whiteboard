<?php
session_start();
if(isset($_SESSION['login'])){
echo 'User already logged in </br>';
}
else
{
echo nope;
}
?>



<form name="entry_form" method="post" action="make_user.php">
Login:<input type="text" name="login"></br>
Password:<input type="text" name="password"></br>
Confirm password:<input type="text" name="password2"></br>
<input type="submit" name="Submit" value="Login">
</form>



<html>
<body>
Login Successful
</body>
</html>
