<!DOCTYPE html>
<html>
<head>
<script src="Scripting.js" ></script>
<script src="raphael-min.js"  ></script>
<link rel="stylesheet" type="text/css" href="mystyle.css">

</head>


<body onload="myFunction()">

<h1>External JavaScript</h1>
<?php
include login;


login();
?>
<p id="Statment">A Paragraph.</p>


</br>
Login:<input type="text" name="login"></br>
Password:<input type="text" name="password"></br>

<p><strong>Note:</strong> myFunction is stored in an external file called "myScript.js".</p>
<div id="paper1" class="board">

</div>


</body>
</html>
