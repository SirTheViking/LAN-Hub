// Show the new user form
$(".create_new").on("click", function() {
    $(".modal").css({
        "display": "flex"
    });
});

// Hide the new user form
$(".modal .cancel").on("click", function() {
    $(".modal").css({
        "display": "none"
    });
});