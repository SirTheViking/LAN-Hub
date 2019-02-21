<?php

// Provides database connection and response() function
require ("../db.php");

/**
 * -[ Used status codes and what they mean:
 *      * 400 - Bad Request
 *      * 201 - Created
 */



// If the variables aren't set, no point in continuing
if(empty($_POST["username"]) || empty($_POST["password"])) {
    respond("Both fields need to be filled in!", 400);
}




$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);
$picture_hash = hash("sha256", $username . $password . rand(1, 500));
$uuid = substr($picture_hash, 0, 8);

$pass_hash = password_hash($password, PASSWORD_BCRYPT);

// TODO: Make sure this actually succeeds. If not handle it
$stmt = $pdo->prepare("INSERT INTO users (username, password, uuid, profile_image) VALUES (:username, :password, :uuid, :profile_image);");
$stmt->bindParam(":username", $username);
$stmt->bindParam(":password", $pass_hash);
$stmt->bindParam(":uuid", $uuid);
$stmt->bindParam(":profile_image", $picture_hash);
$stmt->execute();


// An array of all the required session variables
$session = array(
    "status" => true,
    "username" => $username,
    "profile_image" => $picture_hash
);

$_SESSION[$uuid] = $session;
respond("Registration succesfull.", 201);
