const path = require('path');

module.exports = {
	entry: './src/entrypoint.js',
	output: {
		filename: 'helloxxii-bundled.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: ['.js', '.jsx'],
	},
};