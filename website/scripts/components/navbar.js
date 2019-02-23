/**
 * Handle the navbar click events
 * and data display
 */

$(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
    $(".sidebar, nav").toggleClass("active");
});