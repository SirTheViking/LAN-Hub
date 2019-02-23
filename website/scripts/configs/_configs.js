/*
    Contains things that might need to run in all files
*/


let identicon_options = {
    foreground: [78, 161, 255, 100],
    background: [24, 27, 33, 255], // #181b21
    margin: 0.2,
    size: 420,
    format: "svg"
};


/*
| -------------------------------------------------------------------------
|   The 'image_hash' element will always be in a container with an image
|   so this will work wherever there's an 'image_hash' span
|
|   Won't error out if no elements are found
*/
$(".image_hash").each(function(i) {
    let hash = $(this).text();
    let data = new Identicon(hash, identicon_options);

    $(this).parent().find("img").attr("src", "data:image/svg+xml;base64," + data);
    $(this).remove();
});