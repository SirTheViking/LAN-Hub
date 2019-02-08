<?php

require ("db.php");


$stmt = $pdo->query("SELECT * FROM users;");
while ($row = $stmt->fetch()) {
    echo $row["username"] . "<br>";
}