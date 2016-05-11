<?php
session_start();
if(isset($_SESSION['login'])){
echo hello;
}
else
{
echo nope;
}
?>

<html>
<body>
Login Successful
</body>
</html>
