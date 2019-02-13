$(".modal").css({
    "padding-top": window.innerHeight / 5
});





let options = {
    foreground: [78, 161, 255, 100],
    background: [24, 27, 33, 255], // #181b21
    margin: 0.2,
    size: 420,
    format: "svg"
};

$(".form_avatar img").each(function(i) {
    let hash = $(this).attr("src");

    let data = new Identicon(hash, options);
    $(this).attr("src", "data:image/svg+xml;base64," + data);
});







$("form").on("submit", function(e) {
    e.preventDefault();

    let passwd = $("#login_password").val();
    let uname = $(".current .username").text().trim();;
    let url = "http://localhost:5000/user/login";;

    if($(".create_new").hasClass("current")) {
        uname = $("#register_username").val();
        url = "http://localhost:5000/user/register";
    }

    if(passwd.length == 0) {
        // Show that the fields are required
        $("form input").each(function(i) {
            $(this).addClass("required");
        });

        return;
    }

    $.post(url, {username: uname, password: passwd})
        .done(function(data) { // Reload the page when it's done so the user list is updated
                // TODO: Maybe login directly instead?!
                //location.reload();
            console.log(data);
        });
});











/* MOVE LATER THIS IS FOR TESTING */

/**
 * TODO ]============
 * 4. Add swipe gestures for touch devices
 * 5. Clean this code and the CSS
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

            if($(this).hasClass("create_new")) {
                $("#register_username").css({
                    "opacity": "1",
                    "margin-top": "0"
                });
            }
        }
    });
});



$(document).on("keyup", function(e) {

    let key = e.which;
    let container = $(".avatar_container");
    let current = $(".current");

    switch(key) {
        case 37: //Left
            let prev = current.prev();

            if(prev.length == 0) {
                return;
            }

            margin -= a_width * 2;

            current.removeClass("current");
            prev.addClass("current");
            container.css("margin-right", margin);
            break;
        case 39: //Right
            // TODO: Add last and first checks
            let next = current.next();

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
});