<?php
	
	$marks = array();

$draw = $_POST['data'];
$place = $_POST['location'];

		$myfile = fopen($place, "a+") or die("Unable to open file!");

	fwrite($myfile, $draw);
	fclose(file);
	

echo json_encode($marks);

?>
