<?php
    $json = file_get_contents("http://user-service/all");
    $obj = json_decode($json);
?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <title>Welcome</title>

        <link type="text/css" rel="stylesheet" href="styles/front.css">
        <script src="scripts/jquery.js"></script>
    </head>
    <body>
        
        <div id="container">
            <main>
                <?php 

                    foreach($obj as $user) {
                        echo '
                            <div id="' . $user->id . '" class="avatar user">
                                <div class="thumb">
                                    <img src="user/' . $user->profile_image . '">
                                    
                                    <div class="overlay">
                                        <div class="username">
                                            ' . $user->username . '
                                        </div>
                                        <div class="status">
                                            Offline
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ';
                    }

                ?>

                <div id="4" class="avatar create_new">
                    <div class="thumb">
                        
                        
                        <div class="overlay">
                            <div class="username">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                            </div>
                            <div class="status">
                                Create
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <div class="modal register">
                <form method="post" action="#">
                    <header>Create new User</header>
                    <input name="username" id="username" type="text" placeholder="Username">
                    <input name="password" id="password" type="password" placeholder="Password">
                    <button type="submit">Confirm</button>
                </form>

                <div class="cancel">Cancel</div>
            </div>

            <div class="modal login">
                <form method="post" action="#">
                    <header>Password for&nbsp;<span class="login_username"></span></header>
                    <input id="login_password" type="password" placeholder="Password">
                    <button type="submit">Enter</button>
                </form>

                <div class="cancel">Cancel</div>
            </div>
        </div>

        <script src="scripts/main.js"></script>
    </body>
</html>