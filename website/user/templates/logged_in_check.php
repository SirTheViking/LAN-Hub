<?php 

session_start();


if(empty($_POST["uuid"])) {
    header("Location: /");
    exit(0); // Redirect here
}

// TODO: If ID is only number it will break for some reason
$uuid = htmlspecialchars($_POST["uuid"]);

if($_SESSION[$uuid]["status"] != true) {
    header("Location: /");
    exit(0);
}


$session = $_SESSION[$uuid];

$username = $session["username"];
$profile_image = $session["profile_image"];
