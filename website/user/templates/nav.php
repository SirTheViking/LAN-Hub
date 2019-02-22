<!-- 
    PHP Variables are coming from the login check at the
    top of every page. For now atleast.
-->
<nav>
    <div class="hamburger hamburger--slider" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </div>
    <input type="text" placeholder="Search" autocomplete="off">
</nav>


<div class="sidebar">
    <div class="profile">
        <div class="thumb">
            <img src="<?= $profile_image ?>" alt="Profile Image">
        </div>
        <div id="name">
            <?= $username ?>
        </div>
    </div>

    <div class="links">
        <a href="#">ICON: Link 1</a>
        <a href="#">ICON: Link 2</a>
        <a href="#">ICON: Link 3</a>
        <a href="#">ICON: Link 4</a>
    </div>
</div>




<!-- Maybe dont have this here? might be hard to find later -->
<script type="text/javascript">
    // Handles hamburger icon animation
    $(".hamburger").on("click", function() {
        $(this).toggleClass("is-active");
        $(".sidebar, nav").toggleClass("active");
        
    });



    // Handle rendering the sidebar data
    // TODO: Figure out a way to not have duplicate options and other configs
    // a php script that runs through all .js files and adds them into a single one?
    let options = {
        foreground: [78, 161, 255, 100],
        background: [24, 27, 33, 255], // #181b21
        margin: 0.2,
        size: 420,
        format: "svg"
    };

    let hash = $(".profile img").attr("src");
    let data = new Identicon(hash, options); // Create new image
    $(".profile img").attr("src", "data:image/svg+xml;base64," + data); // Set it as source


</script>