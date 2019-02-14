<?php

$host = "db";
$db = "ip";
$user = "root";
$password = "root";
$port = "3306";
$charset = "utf8mb4";

$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE               => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE    => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES      => false
];

try {
    $pdo = new PDO($dsn, $user, $password, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}


session_start();





/**
 * Used in:
 *  - login.php
 *  - register.php
 * 
 * What:
 *  - Sends a custom message and changes the http status code for the request
 *    depending on what you need to happen
 */
function respond($message, $code) {
    http_response_code($code);

    $response = array(
        "message" => $message
    );

    echo json_encode($message);
    exit(0);
}
