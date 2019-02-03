<?php
    $json = file_get_contents("http://meta-service");
    $obj = json_decode($json);

    $title = $obj->header;
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

        <header> 
            <div> <?php echo $title; ?> </div>
        </header>
        
        <main>

            <div class="avatar">
                <div class="thumb">
                    <img src="https://wallhalla.com/thumbs/preview/e/EbnAPMvHLp.jpg">  
                    
                    <div class="overlay">
                        <div class="username">
                            Lirik
                        </div>
                        <div class="status">
                            Offline
                        </div>
                    </div>
                </div>
            </div>

            <div class="avatar">
                <div class="thumb">
                    <img src="https://wallhalla.com/thumbs/preview/y/yWbQgkbI1N8.jpg">
                    
                    <div class="overlay">
                        <div class="username">
                            Waffle
                        </div>
                        <div class="status">
                            Offline
                        </div>
                    </div>
                </div>
            </div>

            <div class="avatar">
                <div class="thumb current">
                    <img src="https://wallhalla.com/thumbs/preview/k/KEEoeYv8h5Xx.jpg">

                    <div class="overlay">
                        <div class="username">
                            Shorty
                        </div>
                        <div class="status">
                            Logged in
                        </div>
                    </div>
                </div>
            </div>

            <div class="avatar create_new">
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

        <div class="modal">
            <form method="post" action="#">
                <header>Create new User</header>
                <input id="username" type="text" placeholder="Username">
                <input id="password" type="password" placeholder="Password">
                <button type="submit">Confirm</button>
            </form>

            <div class="cancel">Cancel</div>
        </div>



        <script src="scripts/main.js"></script>
    </body>
</html>