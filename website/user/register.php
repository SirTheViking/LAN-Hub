<?php

require ("db.php");

// If the variables aren't set, no point in continuing
if(empty($_POST["username"]) || empty($_POST["password"])) {
    echo "That won't really work"; // TODO: Something more informative
    exit(0);
}





$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);
$picture_hash = hash("sha256", $username . $password . rand(1, 500));

$pass_hash = password_hash($password, PASSWORD_BCRYPT);

$stmt = $pdo->prepare("INSERT INTO users (username, password, profile_image) VALUES (:username, :password, :profile_image);");
$stmt->bindParam(":username", $username);
$stmt->bindParam(":password", $pass_hash);
$stmt->bindParam(":profile_image", $picture_hash);
$stmt->execute();
    
echo "Successfully Registered : " . " Pic Hash: " . $picture_hash; // Temporary

