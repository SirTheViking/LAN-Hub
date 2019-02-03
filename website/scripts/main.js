// Show the new user form
$(".create_new").on("click", function() {
    $(".modal").css({
        "display": "flex"
    });

    $(".modal form input").each(function(i) {
        $(this).removeClass("required");
        $(this).val("");
    });
});

// Hide the new user form
$(".modal .cancel").on("click", function() {
    $(".modal").css({
        "display": "none"
    });
});



// User Creation form
$(".modal form").on("submit", function(e) {
    e.preventDefault();

    let uname = $(".modal form #username").val();
    let passwd = $(".modal form #password").val();

    // So there's no empty sends
    if(uname.length > 0 && passwd.length > 0) {
        $.post("http://localhost:6000", {username: uname, password: passwd});

        return;
    }

    // Show that the fields are required
    $(".modal form input").each(function(i) {
        $(this).addClass("required");
    });
});