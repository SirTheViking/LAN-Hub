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
        $.post("http://localhost:1337/register", {username: uname, password: passwd})
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






/// Just goofing around
let id = 1;
let original = 0;
$(".user").each(function() {
    original++;
});


$(document).keyup(function(e) {
    let key = e.which;

    switch(key) {
        case 39: // Right
            if(id == original) {
                break;
            } else {
                $("#" + id + " .thumb").removeClass("current");
                id++;
                $("#" + id + " .thumb").addClass("current");
            }
            break;
        case 37: // Left
            if(id == 1) {
                break;
            } else {
                $("#" + id + " .thumb").removeClass("current");
                id--;
                $("#" + id + " .thumb").addClass("current");
            }
            break;
    }
});







/// The blinker animation
let state = true; // True visible, false invisible
setInterval(function() {
    let cursor = $("footer .cursor");

    if(state == true) {
        cursor.css({
            "visibility": "hidden"
        });
    } else {
        cursor.css({
            "visibility": "visible"
        });
    }

    state = !state;
}, 600);