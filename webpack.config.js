const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode:'production',

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
						presets:[['@babel/preset-env',{modules:false}],'@babel/preset-react'],
						cacheDirectory: true,
						cacheCompression: false,
						plugins:['@babel/plugin-transform-runtime','@babel/plugin-syntax-dynamic-import',
							'@babel/plugin-proposal-class-properties']
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
