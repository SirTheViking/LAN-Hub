<?php
    $json = file_get_contents("http://user-service/all");
    $obj = json_decode($json);
?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="theme-color" content="#181b21">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        
        <title>Welcome</title>

        <link type="text/css" rel="stylesheet" href="styles/front.css">
        <script src="scripts/jquery.js"></script>
        <script src="scripts/identicon.js"></script>
    </head>
    <body>

        <div class="background"></div>


            <div class="modal login">

                <div class="avatar_container">
                    <?php 

                        foreach($obj as $user) {
                            echo '
                                <div id="' . $user->id . '" class="form_avatar user">
                                    <div class="thumb_small">
                                        <img src="' . $user->profile_image . '">
                                        
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

                    <div class="form_avatar create_new current">
                        <div class="thumb_small">
                            
                            
                            <div class="overlay">
                                <div class="username">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                                </div>
                                <div class="status">
                                    Create User
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form method="post" action="#">
                    <!-- 
                        | #register_username should only be visible when .current is on .create_new
                        | Smooth transition on visibility and margin top when it shows up and 
                        | when it disappears
                     -->
                    <input id="register_username" type="text" placeholder="Username" autocomplete="off">
                    <input id="login_password" type="password" placeholder="Password" autocomplete="off">
                    <button type="submit">Enter</button>
                </form>
            </div>
            
        <script src="scripts/main.js"></script>
    </body>
</html>