<?php

require ("db.php");

// If the variables aren't set, no point in continuing
if(empty($_POST["username"]) || empty($_POST["password"])) {
    echo "This didn't work now did it"; // TODO: Something more informative
    exit(0);
}


$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);

$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->bindParam(":username", $username);
$stmt->execute();

$data = $stmt->fetch();

if(empty($data)) {
    echo "SHITS WACK YO"; // TODO: Something more informative
    exit(0);
}

if(password_verify($password, $data["password"])) {
    $_SESSION["logged_in"] = $username;


    echo $_SESSION["logged_in"] . " Logged in"; // TODO: Login
} else {
    echo "Access Denied";
}
