<?php

require ("db.php");

if(isset($_POST["username"]) && isset($_POST["password"])) {
    $username = htmlspecialchars($_POST["username"]);
    $password = htmlspecialchars($_POST["password"]);

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $data = $stmt->fetch();

    if(empty($data)) {
        echo "SHITS WACK YO";
        exit(0);
    }

    if(password_verify($password, $data["password"])) {
        $_SESSION["logged_in"] = $username;


        echo $_SESSION["logged_in"] . " Logged in";
    } else {
        echo "Access Denied";
    }
} else {
    // TODO: Return useful info
    echo "UGH";
}