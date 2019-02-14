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

// TODO: Make sure this actually succeeds. If not handle it
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->bindParam(":username", $username);
$stmt->execute();

$data = $stmt->fetch();

// Invalid username (somehow). This shouldn't normally happen
if(empty($data)) {
    // Not Found
    http_response_code(404);
    $response["message"] = "Wrong username. What did you do?!";

    echo json_encode($response);
    exit(0);
}


// Invalid password
if(!password_verify($password, $data["password"])) {
    // Bad Request
    http_response_code(400);
    $response["message"] = "Password doesn't work with that username";

    echo json_encode($response);
    exit(0);
}


$_SESSION["logged_in"] = true;
// Accepted
http_response_code(202);
$response["message"] = "Login successful. Welcome!";

echo json_encode($response);
