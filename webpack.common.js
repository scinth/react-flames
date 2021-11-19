module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name]-[contenthash].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
		],
	},
};
