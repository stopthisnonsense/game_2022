const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: './src/index.ts',
	output: {
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true, implementation: require('sass') },
					},
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [new MiniCssExtractPlugin()],
};
