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

    // Get the http://localhost:port/ link in case the port ever changes
    let url_split = window.location.href.split("/")
    let host_domain = url_split[0] + "//" + url_split[2];

    // So there are no empty sends
    if(uname.length > 0 && passwd.length > 0) {
        $.post("http://localhost:1337/register", {username: uname, password: passwd, domain: host_domain})
            .done(function() { // Reload the page when it's done so the user list is updated
                // TODO: Maybe login directly instead?!
                location.reload();
            });
    
    } else {
        // Show that the fields are required
        $(".register form input").each(function(i) {
            $(this).addClass("required");
        });
    }
});













