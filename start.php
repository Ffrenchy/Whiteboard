<!DOCTYPE html>
<html>
<body>

<?php  
session_start();
echo 'Welcome '. $_SESSION['login']. '</br>';

$file_dir = "/var/www/html/uploads/".$_SESSION['login']."/";
$images = glob($file_dir."*.*");
$image_selected = str_replace("/var/www/html/", "", $images);


foreach($image_selected as $image) {
echo '<img src="'.$image .'" height="50" width="50" /><br />';
}

?>

<form action="upload_photo.php" method="post" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>
