/**
 * Handle the navbar click events
 * and data display
 */

$(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
    $(".sidebar, nav").toggleClass("active");
});



try { // Maybe there's a better solution but it'll do for now
    let hash = $(".profile img").attr("src");
    let data = new Identicon(hash, identicon_options); // Create new image
    $(".profile img").attr("src", "data:image/svg+xml;base64," + data); // Set it as source
} catch (err) {
    console.log("There was no .profile img");
}