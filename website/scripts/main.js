// Show the new user form
$(".create_new").on("click", function() {
    $(".register").css({
        "display": "flex"
    });

    $(".register form input").each(function(i) {
        $(this).removeClass("required");
        $(this).val("");
    });
});

// Hide the new user form
$(".register .cancel").on("click", function() {
    $(".register").css({
        "display": "none"
    });
});



// User Creation form
$(".register form").on("submit", function(e) {
    e.preventDefault();

    let uname = $(".register form #username").val();
    let passwd = $(".register form #password").val();

    // So there are no empty sends
    if(uname.length > 0 && passwd.length > 0) {
        $.post("http://localhost:5000/user/register", {username: uname, password: passwd})
            .done(function(data) { // Reload the page when it's done so the user list is updated
                // TODO: Maybe login directly instead?!
                //location.reload();
                console.log(data);
            });
    
    } else {
        // Show that the fields are required
        $(".register form input").each(function(i) {
            $(this).addClass("required");
        });
    }
});







// Show the login
$(".avatar.user").on("click", function() {
    $(".login").css({
        "display": "flex"
    });

    $(".login .login_username").text($(this).find(".username").text());

    // Just in case
    $(".login form input").each(function(i) {
        $(this).removeClass("required");
        $(this).val("");
    });
});

// Hide the login form
$(".login .cancel").on("click", function() {
    $(".login").css({
        "display": "none"
    });
});



// User Creation form
$(".login form").on("submit", function(e) {
    e.preventDefault();

    let passwd = $(".login form #login_password").val();
    let uname = $(".login_username").text().trim();

    console.log(uname);

    // So there are no empty sends
    if(passwd.length > 0) {
        $.post("http://localhost:5000/user/login", {username: uname, password: passwd})
            .done(function(data) { // Reload the page when it's done so the user list is updated
                // TODO: Maybe login directly instead?!
                //location.reload();
                console.log(data);
            });
    
    } else {
        // Show that the fields are required
        $(".login form input").each(function(i) {
            $(this).addClass("required");
        });
    }
});





