<?php

require ("db.php");

// Not used but it'll stay here for now
$response = array(
    "message" => "{Replace}"
);


// If the variables aren't set, no point in continuing
if(empty($_POST["username"]) || empty($_POST["password"])) {
    // Bad Request
    http_response_code(400);
    $response["message"] = "Both fields need to be filled in!";

    // Return a JSON here
    echo json_encode($response);
    exit(0);
}





$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);
$picture_hash = hash("sha256", $username . $password . rand(1, 500));

$pass_hash = password_hash($password, PASSWORD_BCRYPT);

// TODO: Make sure this actually succeeds. If not handle it
$stmt = $pdo->prepare("INSERT INTO users (username, password, profile_image) VALUES (:username, :password, :profile_image);");
$stmt->bindParam(":username", $username);
$stmt->bindParam(":password", $pass_hash);
$stmt->bindParam(":profile_image", $picture_hash);
$stmt->execute();


$_SESSION["logged_in"] = true; // Will do for now


// Created
http_response_code(201);
$response["message"] = "Registration successfull";

// Return a JSON here
echo json_encode($response);

