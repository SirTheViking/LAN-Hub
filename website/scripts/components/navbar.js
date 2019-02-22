/**
 * Handle the navbar click events
 * and data display
 */

$(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
    $(".sidebar, nav").toggleClass("active");
});


// TODO: Try not to have multiple option configs throughout the code
let options = {
    foreground: [78, 161, 255, 100],
    background: [24, 27, 33, 255], // #181b21
    margin: 0.2,
    size: 420,
    format: "svg"
};

let hash = $(".profile img").attr("src");

let data = new Identicon(hash, options); // Create new image
$(".profile img").attr("src", "data:image/svg+xml;base64," + data); // Set it as source