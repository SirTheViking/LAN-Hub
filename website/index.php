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
                            Last Login
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

        <footer>
            <button>New</button>
        </footer>

    </body>
</html>