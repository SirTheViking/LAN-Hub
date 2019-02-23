window.$ = window.jQuery    = require("jquery");
window.Identicon            = require("identicon.js");

require("jquery-touch-events");


// Configuration for different global values
require("./components/_configs");

// Actual components TODO: Change above into their own folders
require("./components/carousel");

// Custom files
require("./components/front");
require("./components/navbar");


