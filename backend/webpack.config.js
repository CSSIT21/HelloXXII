const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/entrypoint.js',
	context: path.join(__dirname),
	output: {
		filename: 'helloxxii-bundled.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
		alias: {
			'@app': path.join(__dirname, 'src/app'),
			'@models': path.join(__dirname, 'src/models'),
			'@utils': path.join(__dirname, 'src/utils'),
		},
		extensions: ['.js', '.jsx', '.json'],
	},
	target: 'node',
};