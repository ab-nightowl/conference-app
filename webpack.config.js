var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// définition des points d'entrée
	// il est possible de définir plusieurs points d'entrée
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "dist.js"
	},
	plugins: [
		new HtmlWebpackPlugin()
	],
	module: {
		rules: [
			{ test: /\.html$/, use: "html-loader" }
		]
	}
}
