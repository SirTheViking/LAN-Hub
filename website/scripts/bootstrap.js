window.$ = window.jQuery    = require("jquery");
window.Identicon            = require("identicon.js");

require("jquery-touch-events");


// Configuration for different global values
require("./configs/_configs");

// Actual components TODO: Change above into their own folders
require("./components/carousel");
require("./components/navbar");

// Custom files
require("./pages/front");



