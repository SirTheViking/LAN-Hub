<?php

require ("db.php");

// If the variables aren't set, no point in continuing
if(empty($_POST["username"]) || empty($_POST["password"])) {
    echo "That won't really work"; // TODO: Something more informative
    exit(0);
}





$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);
$random_pic = random_pic(); // Random profile picture

$pass_hash = password_hash($password, PASSWORD_BCRYPT);

$stmt = $pdo->prepare("INSERT INTO users (username, password, profile_image) VALUES (:username, :password, :profile_image);");
$stmt->bindParam(":username", $username);
$stmt->bindParam(":password", $pass_hash);
$stmt->bindParam(":profile_image", $random_pic);
$stmt->execute();
    
echo "Successfully Registered"; // Temporary








function random_pic($dir = "data/images") {
    $files = glob($dir . "/*.*");
    $file = array_rand($files);
    return $files[$file];
}
