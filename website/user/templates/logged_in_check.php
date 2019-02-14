<?php 

session_start();

// TODO: MAKE IT WORK

if(empty($_POST["uuid"])) {
    echo "woopsies";
    exit(0); // Redirect here
}


$uuid = htmlspecialchars($_POST["uuid"]);

if($_SESSION[$uuid]["status"] == true) {
    echo "Nice.";
}
