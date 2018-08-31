const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
	entry: {
		public: "./src/js/public/main.js"
	},
	output: {
		filename: "js/[name].js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "postcss-loader", "sass-loader"]
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"]
				}
			}
		]
	},
	// Adding jQuery as external library
	externals: {
		jquery: "jQuery"
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new ExtractTextPlugin("css/[name].css"),
		new BrowserSyncPlugin({
            // proxy: "localhost/project-folder",
            host: 'localhost',
            port: 3000,
            server: {
                index: "index.html"
            },
			files: ["**/*.html"],
			ghostMode: {
				clicks: false,
				location: false,
				forms: false,
				scroll: false
			},
			injectChanges: true,
			logFileChanges: true,
			logLevel: "debug",
			logPrefix: "wepback",
			notify: true,
			reloadDelay: 0
		})
	]
};

//If true JS and CSS files will be minified
if (process.env.NODE_ENV === "production") {
	config.plugins.push(new UglifyJSPlugin(), new OptimizeCssAssetsPlugin());
}

module.exports = config;
