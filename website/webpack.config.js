const path              = require("path");
const webpack           = require("webpack");
const mini_css_plugin   = require("mini-css-extract-plugin");



module.exports = (env, argv) => {
    let prod = argv.mode === "production";

    return {
        watch: true,
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
        plugins: [
            /*
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })*/
            new mini_css_plugin({
                filename: "app.css"
            })
        ]
    }
};
