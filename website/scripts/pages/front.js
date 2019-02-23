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
#######  Whenever the form is submitted.
#######  Wether it's register or login, it's handled here
#######
####*/
$("form").on("submit", function(e) {
    e.preventDefault();

    // Get the password, whatever is in the .username of the .current
    // and the login url (default values)
    let passwd = $("#form_password").val();
    let uname = $(".current .username").text().trim();
    let url = `/user/services/login`;

    // The registration form doesn't care about this only login
    let uuid = $(".current").attr("id"); 

    // If .create_new is in focus that means user wants to register
    if($(".create_new").hasClass("current")) {
        // Change username and url to new values
        uname = $("#form_username").val();
        url = `/user/services/register`;
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
    $.post(url, {username: uname, password: passwd, uuid: uuid})
        .done(function(data, status, xhr) {
            // Codes: 201, 202
            redirect(`/user/home`, "POST", uuid);

        }).fail(function(xhr) {

            let code = xhr.status;
            let status = $(".current .status");

            status.addClass("problem");

            switch(code) {
                case 400: // Bad Request
                    status.text("Wrong password!");
                    break;

                case 404: // Not Found
                    status.text("???");
                    break;
            }
        });
});








// Add event listener for carousel
let carousel_container = document.querySelector(".carousel_container");
let carousel_handler = function(e) {
    // TODO: Probably not the best way to handle this?
    if(!document.getElementById("login")) 
        this.removeEventListener("carousel-move", carousel_handler);
    
    let has_class = $(".current").hasClass("create_new");
    if(has_class)
        $("#form_username").removeClass("hidden");
    else
        $("#form_username").addClass("hidden");
            
};

if(carousel_container)
    carousel_container.addEventListener("carousel-move", carousel_handler);





/**
 * Create a new hidden form and submit it with the required
 * values in order to get a nice and clean redirect to the
 * home page after a login TODO: and register
 * 
 * @param {string} url      The url where the form redirects to
 * @param {string} method   What the method should be GET/POST
 * @param {string} uuid     The user uuid used to authenticate after login
 */
function redirect(url, method, uuid) {
    let form = document.createElement("form");
    let input = document.createElement("input");

    form.method = method;
    form.action = url;
    input.value = uuid;
    input.name = "uuid";

    form.appendChild(input);
    form.style.display = "none";

    document.body.appendChild(form);

    form.submit();
}