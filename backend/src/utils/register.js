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
			'account',
		].forEach((file) => {
			const module = require(`../routes/${file}.js`);
			
			if (file === 'index') {
				fastify.register(module, { prefix: '/' });
			} else {
				fastify.register(module, {
					prefix: '/' + file,
				});
			}
			
			consola.success(
				`Added ${'route'.cyan} ${('/' + (file === 'index' ? '' : file)).green}`,
			);
		});
	},
};
