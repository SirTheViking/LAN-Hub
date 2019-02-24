window.$ = window.jQuery    = require("jquery");
window.Identicon            = require("identicon.js");

require("jquery-touch-events");


// Configuration for different global values
require("./configs/_configs");

// Components
require("./components/carousel");
require("./components/navbar");

// Custom files
require("./pages/front");



// TODO: Move it to it's own file maybe?
// Import the css for everything
import "../styles/sass/app.scss";



