const webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'./app/app.js'
	],
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			},
			exclude: /(node_modules|bower_components)/
		},
		{
			test: /\.scss?$/,
			loader: 'style!css!sass!'
		},
		{
			// Font Awesome
	        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
	        loader: 'url-loader'
		}]
	},
	devtool: 'cheap-eval-source-map'
}