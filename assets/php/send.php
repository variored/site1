<?php

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$site = $_POST["site"];
$comment = $_POST["comment"];

$SEND_TO = "varioredip@Gmail.com";
$HEADER = "GITHUB_SITE_1 (form \"Contact-Us\")";
$CONTENT = "comment: $comment";


mail($SEND_TO, $HEADER, $CONTENT, "from: $mail($name)<br>phone: $phone<br>site: $site");

?>