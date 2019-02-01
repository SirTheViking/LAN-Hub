<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <title>Welcome</title>
    </head>
    <body>

        <h1>Coolsies</h1>

        <ul>
            <?php
                $json = file_get_contents("http://login-service");
                $obj = json_decode($json);

                foreach($obj->usernames as $item) {
                    echo "<li>$item</li>";
                }
            ?>
        </ul>
    </body>
</html>