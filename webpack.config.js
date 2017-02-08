var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
	entry: path.join(__dirname, './app/main.jsx'),
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 8080,
		historyApiFallback: true
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-2']
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("css-loader")
		}]
	},
	plugins: [
		new ExtractTextPlugin("./css/style.css", {
			publicPath: "/dist/",
			allChunks: true
		})
	]
}

module.exports = config;
