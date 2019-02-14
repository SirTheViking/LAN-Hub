/* ####
#######
#######  Small tweaks based on screen size
#######
####*/
$(".modal").css({
    "padding-top": window.innerHeight / 5
});





/* ####
#######
#######  Identicon/Profile avatar generation
#######  based on the hash
#######
####*/
let options = {
    foreground: [78, 161, 255, 100],
    background: [24, 27, 33, 255], // #181b21
    margin: 0.2,
    size: 420,
    format: "svg"
};

// For every user that was returned from the database
$(".form_avatar img").each(function(i) {
    let hash = $(this).attr("src");

    let data = new Identicon(hash, options); // Create new image
    $(this).attr("src", "data:image/svg+xml;base64," + data); // Set it as source
});






/* ####
#######
#######  Whenever the form is submitted.
#######  Wether it's register or login, it's handled here
#######
####*/
$("form").on("submit", function(e) {
    e.preventDefault();

    // Get the password, whatever is in the .username of the .current
    // and the login url (default values)
    let passwd = $("#login_password").val();
    let uname = $(".current .username").text().trim();
    let url = "http://localhost:5000/user/login";

    // If .create_new is in focus that means user wants to register
    if($(".create_new").hasClass("current")) {
        // Change username and url to new values
        uname = $("#register_username").val();
        url = "http://localhost:5000/user/register";
    }

    // If password input is empty that's no good
    if(passwd.length == 0 || uname.length == 0) {
        // Show that the fields are required
        $("form input").each(function(i) {
            $(this).addClass("required");
        });

        return;
    }

    // Send the request to wherever it's supposed to go
    $.post(url, {username: uname, password: passwd})
        .done(function(data, status, xhr) {
            // TODO: Redirect or something
            let code = xhr.status;

            // TODO: Maybe remove switches
            switch(code) {
                case 201: // Created
                    console.log(data);
                    break;

                case 202: // Accepted
                    console.log(data);
                    break;
            }

        }).fail(function(xhr) {

            let code = xhr.status;

            switch(code) {
                case 400: // Bad Request
                    console.log(xhr.responseText);
                    break;

                case 404: // Not Found
                    console.log(xhr.responseText);
                    break;
            }
        });
});






/* ####
#######
#######  Handling of how the "carousel" of users behaves
#######
####*/
var center = window.innerWidth / 2; // Center of window
var a_width = $(".current").first().outerWidth(true); // Total width of avatar (+margin, padding, border)
var margin = 0; // Keep check of how much margin should actually be added


// If the amount of users is even, center one of them
if($(".form_avatar").length % 2 == 0) {
    margin = a_width;
    $(".avatar_container").css("margin-right", margin);
}

// When document is ready, find the icon in the center
// and give it the .current class so that it stands out
$(document).ready(function() {
    $(".form_avatar").each(function(i) {

        let pos = $(this).offset();

        // Weird check for android chrome (check if it's near the center)
        if(pos.left <= center + 100 && pos.left >= center - 100) {
            $(".current").removeClass("current");
            $(this).addClass("current");

            // If it's the new user tile show the username input aswell
            if($(this).hasClass("create_new")) {
                $("#register_username").css({
                    "opacity": "1",
                    "margin-top": "0"
                });
            }
        }
    });
});







/* ####
#######
#######  Different events for different ways
#######  of controlling the carousel
#######
####*/
// Keyboard
$(document).on("keyup", function(e) { 
    let key = e.which;
    carouselHandler(key);
});
// Swipes
$(".modal").on("swipe", function(e, swipe) {
    let direction = swipe.direction;
    
    if(direction == "left") {
        direction = "right";
    } else {
        direction = "left";
    }

    carouselHandler(direction);
});
// Clicks
$(".form_avatar").on("click", function() {
    let pos = $(this).offset();

    if(pos.left < center) {
        carouselHandler("left");
    } else {
        carouselHandler("right");
    }
});







/* ####
#######
#######  Function definitions
#######
####*/

// Handle the keyup and swipe events
function carouselHandler(key) {
    let container = $(".avatar_container");
    let current = $(".current");

    switch(key) {
        case "left":
        case 37: //Left

            let prev = current.prev();

            // If there's no other elements before this one
            if(prev.length == 0) {
                return;
            }

            margin -= a_width * 2;

            current.removeClass("current");
            prev.addClass("current");
            container.css("margin-right", margin);
            break;

        case "right":
        case 39: //Right

            let next = current.next();

            // If there's no other elements after this one
            if(next.length == 0) {
                return;
            }

            margin += a_width * 2;

            current.removeClass("current");
            next.addClass("current");
            container.css("margin-right", margin);
            break;
    }

    // This means the registration form should be visible
    if($(".current").hasClass("create_new")) {
        $("#register_username").css({
            "opacity": "1",
            "margin-top": "0",
            "cursor": "text"
        });
    } else {
        // Gotta hide it as best as possible
        // while still having a smooth animation
        $("#register_username").css({
            "opacity": "0",
            "margin-top": "-60px",
            "cursor": "default"
        });
    }
}