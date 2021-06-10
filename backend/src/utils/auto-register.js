const glob = require('glob');
const path = require('path');
const consola = require('consola');
const colors = require('colors');

module.exports = {
	registerPlugins: (fastify, dir = '../plugins/**.js') => {
		glob.sync(path.join(__dirname, dir)).forEach((file) => {
			require(file)(fastify);
			consola.success(
				`Added ${'plugin'.yellow} ${path.basename(file, '.js').green}`,
			);
		});
	},
	registerRoutes: (fastify, dir = '../routes/**.js') => {
		// fastify.register(require('../routes/account'), { prefix: '/account'});
		glob.sync(path.join(__dirname, dir)).forEach((file) => {
			var route = path.basename(file, '.js');
			if ('index' === route.trim().toLowerCase()) {
				fastify.register(require(file), { prefix: '/' });
				consola.success(`Added ${'route'.cyan} ${'/'.green}`);
			} else {
				fastify.register(require(file), {
					prefix: '/' + path.basename(file, '.js'),
				});
				consola.success(
					`Added ${'route'.cyan} ${('/' + path.basename(file, '.js')).green}`,
				);
			}
		});
	},
};
