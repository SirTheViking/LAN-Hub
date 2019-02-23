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
            <span class="image_hash"><?= $profile_image ?></span>
            <img src="#" alt="Profile Image">
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