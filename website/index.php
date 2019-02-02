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

        <link type="text/css" rel="stylesheet" href="styles/login.css">
        
        <!-- Poppins font from google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet"> 
    </head>
    <body>

        <header> <?php echo $obj->header; ?> </header>

    </body>
</html>