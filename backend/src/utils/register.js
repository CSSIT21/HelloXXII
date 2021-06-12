const glob = require('glob');
const path = require('path');
const consola = require('consola');
require('colors');

module.exports = {
	registerPlugins: (fastify) => {
		[
			'bodyParser',
			'cookieParser',
			'cors',
		].forEach((file) => {
			require(`../plugins/${file}.js`)(fastify);
			consola.success(
				`Added ${'plugin'.yellow} ${path.basename(file, '.js').green}`,
			);
		});
	},
	registerRoutes: (fastify) => {
		[
			'index',
			'account-oauth',
			'account-oauth-callback',
			'account-oauth-redirect'
		].forEach((file) => {
			const module = require(`../routes/${file}.js`);
			fastify.register(module, { prefix: '/' });
			consola.success(
				`Added ${'route'.cyan} ${('/' + (file === 'index' ? '' : file)).green}`,
			);
		});
	},
};
