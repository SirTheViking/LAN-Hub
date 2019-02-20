<nav>
    <div class="hamburger hamburger--slider" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </div>
    <input type="text" placeholder="Search" autocomplete="off">
</nav>

<!-- Maybe dont have this here? might be hard to find later -->
<script type="text/javascript">
    $(".hamburger").on("click", function() {
        $(this).toggleClass("is-active");
    });
</script>