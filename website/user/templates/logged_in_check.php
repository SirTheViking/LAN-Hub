<?php 

session_start();
/*
// TODO: MAKE IT WORK

if(empty($_POST["uuid"])) {
    header("Location: /");
    exit(0); // Redirect here
}


$uuid = htmlspecialchars($_POST["uuid"]);

if($_SESSION[$uuid]["status"] != true) {
    header("Location: /");
    exit(0);
}
*/


// Set the a few variables so that the templates
// can use them if needed

$uuid = htmlspecialchars($_POST["uuid"]); // Temporary

$username = $_SESSION[$uuid]["username"];
$profile_image = $_SESSION[$uuid]["profile_image"];
