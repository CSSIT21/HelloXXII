const path = require('path');
const consola = require('consola');
require('colors');

module.exports = {
	registerPlugins: (fastify) => {
		[
			'bodyParser',
			'cookieParser',
			'cors',
			'routes',
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
			'account-oauth-redirect',
			'account-photo',
			'account-profile',
			'admin-setup',
			'admin-op',
			'cs21-info',
			'cs21-setcode',
			'cs21-sethints',
			'cs22-info',
			'cs22-pair',
			'cs22-commit'
		].forEach((file) => {
			const module = require(`../routes/${file}.js`);
			fastify.register(module, { prefix: '/' });
			consola.success(`Added ${'route'.cyan} ${file.green}`);
		});
	},
};
