<?php 

session_start();

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

// If the checks above don't trigger 
// it's fine and the page will render normally
