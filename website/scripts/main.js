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

    if(uname.length == 0 || passwd.length == 0) {
        // Show that the fields are required
        $(".register form input").each(function(i) {
            $(this).addClass("required");
        });

        return;
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









/* MOVE LATER THIS IS FOR TESTING */

/**
 * TODO ]============
 * 
 * 1. Don't go past the last avatar or before the first one
 * 2. Login form variables should all be pulled when pressing 
 *      and the form submitted
 * 3. Register form should either go away and something new comes instead
 *      or find a way to make it appear nicely
 * 4. Add swipe gestures for touch devices
 */

var center = window.innerWidth / 2;
// the total width of an avatar
var a_width = $(".current").first().outerWidth(true);
// Just to make sure that spamming doesnt ruin it
var margin = 0;


// If the amount of users is even, center one of them
if($(".form_avatar").length % 2 == 0) {
    margin = a_width;
    $(".avatar_container").css("margin-right", margin);

}

$(document).ready(function() {
    $(".form_avatar").each(function(i) {

        let pos = $(this).offset();

        // Weird check for android chrome
        if(pos.left <= center + 100 && pos.left >= center - 100) {
            $(".current").removeClass("current");
            $(this).addClass("current");
        }
    });
});



$(document).on("keyup", function(e) {

    let key = e.which;
    let container = $(".avatar_container");
    let current = $(".current");

    switch(key) {
        case 37: //Left
            margin -= a_width * 2;

            let prev = current.prev();

            current.removeClass("current");
            prev.addClass("current");
            container.css("margin-right", margin);
            break;
        case 39: //Right
            margin += a_width * 2;

            // TODO: Add last and first checks
            let next = current.next();

            current.removeClass("current");
            next.addClass("current");
            container.css("margin-right", margin);
            break;
    }
});