<?php

// Provides database connection and response() function
require ("../db.php");

/**
 * -[ Used status codes and what they mean:
 *      * 400 - Bad Request
 *      * 404 - Not Found
 *      * 202 - Accepted
 */



// If the variables aren't set, no point in continuing
if(empty($_POST["username"]) || empty($_POST["password"]) || empty($_POST["uuid"])) {
    respond("Both fields need to be filled in!", 400);
}



$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);
$uuid = htmlspecialchars($_POST["uuid"]); // Unique ID for different session variables

// TODO: Make sure this actually succeeds. If not handle it
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username AND uuid = :uuid");
$stmt->bindParam(":username", $username);
$stmt->bindParam(":uuid", $uuid);
$stmt->execute();

$data = $stmt->fetch();

// Invalid username (somehow). This shouldn't normally happen
if(empty($data)) {
    respond("Wrong username or UUID. What did you do!?!", 404);
}


// Invalid password
if(!password_verify($password, $data["password"])) {
    respond("Password doesn't work with that username.", 400);
}



// An array of all the required session variables
$session = array(
    "status" => true,
    "username" => $username,
    "maybe_more_here" => "probably"
);

$_SESSION[$uuid] = $session;
respond("Login successful. Welcome!", 202);
