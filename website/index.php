<?php
    $json = file_get_contents("http://meta-service");
    $obj = json_decode($json);
?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <title>Welcome</title>

        <link type="text/css" rel="stylesheet" href="styles/front.css">
    </head>
    <body>

        <header> <?php echo $obj->header; ?> </header>
        
        <form action="/login.php" method="post">
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">

            <button type="submit">Enter</button>
        </form>

    </body>
</html>