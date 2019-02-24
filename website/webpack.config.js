const path                  = require("path");

const mini_css_plugin       = require("mini-css-extract-plugin");
const uglify_js_plugin      = require("uglifyjs-webpack-plugin");
const copy_plugin           = require("copy-webpack-plugin");


let config = {};

config.mini_css = {
    filename: "app.css"
}

config.copy_plugin = [
    { from: "index.php", to: "index.php" },
    { from: "user", to: "user", toType: "dir" },
    { from: "resources", to: "resources", toType: "dir" },
    { from: ".htaccess", to: ".htaccess", toType: "file"}
];



module.exports = (env, argv) => {
    let prod = argv.mode === "production";

    return {
        // Don't watch if building for production
        watch: prod ? false : true,
        // Tell webpack to begin building its
        // dependency graph from this file
        entry: path.join(__dirname, "scripts", "bootstrap.js"),
        // And to place the output in the build directory
        output: {
            path: path.join(__dirname, "build"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        mini_css_plugin.loader,
                        "css-loader", 
                        "postcss-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: prod ? [ // Run when production is true
            // Clean the javascript and make it
            // mostly unreadable
            new uglify_js_plugin({
                uglifyOptions: {
                    warnings: false,
                    compress: {},
                    mangle: true,
                    output: {
                        comments: false
                    }
                }
            }),
            // All sass to one css file
            new mini_css_plugin(config.mini_css),
            // Copy all required files to the build folder
            // so it can be copied to whatever server needs it
            new copy_plugin(config.copy_plugin)
        ] : [
            // If development
            // Just bundle all css for now
            new mini_css_plugin(config.mini_css),
            new copy_plugin(config.copy_plugin)
        ]
    }
};



