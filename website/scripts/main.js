// Show the new user form
$(".create_new").on("click", function() {
    $(".register").css({
        "display": "flex"
    });

    hideElement(".thumb");

    $(".register form input").each(function(i) {
        $(this).removeClass("required");
        $(this).val("");
    });
});

// Hide the new user form
$(".register .cancel").on("click", function() {
    showElement(".thumb");

    $(".register").css({
        "display": "none"
    });
});



// User Creation form
$(".register form").on("submit", function(e) {
    e.preventDefault();

    let uname = $(".register form #username").val();
    let passwd = $(".register form #password").val();

    if(uname.length == 0 || passwd.length == 0) {
        // Show that the fields are required
        $(".register form input").each(function(i) {
            $(this).addClass("required");
        });
    }

    $.post("http://localhost:5000/user/register", {username: uname, password: passwd})
        .done(function(data) { // Reload the page when it's done so the user list is updated
                // TODO: Maybe login directly instead?!
                //location.reload();
            console.log(data);
        });
});








// Show the login
$(".avatar.user").on("click", function() {
    hideElement(".thumb");

    // Get the variables required to make the login form look nicer
    let image = $(this).find(".thumb img").attr("src");
    let username = $(this).find(".username").text().trim();
    let status = "Logging in";
    

    $(".form_avatar .thumb_small img").attr("src", image);
    $(".form_avatar .username").text(username);
    $(".form_avatar .status").text(status);
    


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
    showElement(".thumb");
    
    $(".login").css({
        "display": "none"
    });
});




// User Creation form
$(".login form").on("submit", function(e) {
    e.preventDefault();

    let passwd = $(".login form #login_password").val();
    let uname = $(".login_username").text().trim();

    if(passwd.length == 0) {
        // Show that the fields are required
        $(".login form input").each(function(i) {
            $(this).addClass("required");
        });

        return;
    }

    $.post("http://localhost:5000/user/login", {username: uname, password: passwd})
        .done(function(data) { // Reload the page when it's done so the user list is updated
                // TODO: Maybe login directly instead?!
                //location.reload();
            console.log(data);
        });
});











function showElement(element) {
    $(element).css({
        "opacity": "1"
    });
}

function hideElement(element) {
    $(element).css({
        "opacity": "0"
    });
}


