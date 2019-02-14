<?php

require ("db.php");

/**
 * -[ Used status codes and what they mean:
 *      * 400 - Bad Request
 *      * 404 - Not Found
 *      * 202 - Accepted
 */



// If the variables aren't set, no point in continuing
if(empty($_POST["username"]) || empty($_POST["password"])) {
    respond("Both fields need to be filled in!", 400);
}



$username = htmlspecialchars($_POST["username"]);
$password = htmlspecialchars($_POST["password"]);

// TODO: Make sure this actually succeeds. If not handle it
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->bindParam(":username", $username);
$stmt->execute();

$data = $stmt->fetch();

// Invalid username (somehow). This shouldn't normally happen
if(empty($data)) {
    respond("Wrong username. What did you do!?!", 404);
}


// Invalid password
if(!password_verify($password, $data["password"])) {
    respond("Password doesn't work with that username.", 400);
}


$_SESSION["logged_in"] = true;
respond("Login successful. Welcome!", 202);




function respond($message, $code) {
    http_response_code($code);

    $response = array(
        "message" => $message
    );

    echo json_encode($message);
    exit(0);
}