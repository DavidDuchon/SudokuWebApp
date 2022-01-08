const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode:'development',

	cache:{
		type: 'filesystem'
	},

	entry: './frontendOriginal/index.js',

	output: {
		path: path.resolve(__dirname, 'frontend'),
		filename: 'index.js',
	},

	module:	{
		rules:[
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets:['@babel/preset-react'],
						cacheDirectory: true,
						cacheCompression: false
					}
				},

			},

			{
				test:/\.css$/,
				use: ['style-loader','css-loader'],
			}

		]

	},

	plugins: [new HtmlWebpackPlugin({
			
			template: './frontendOriginal/index.html',		
			filename: 'index.html',
		})],
};
