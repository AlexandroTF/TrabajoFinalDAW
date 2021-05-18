<?php
// $handle = fopen("chatlog.txt", "w+");
// $contents = fread($handle, filesize("chatlog.txt"));
// fclose($handle);
// echo('hola');
$filename = "chatlog.txt";
$handle = fopen($filename, "r");
$contents = fread($handle, filesize($filename));
echo($contents);
fclose($handle);
?>