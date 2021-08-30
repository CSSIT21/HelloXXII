const thinky = require('thinky');
const { dev } = require('@utils/environment');
const hostname = require('os').hostname();

module.exports = {
	getThinkyInstance: () =>
		thinky({
			host: '10.5.55.11',
			log: false,
			db: dev ? 'helloxxii-' + hostname.split('.')[0].replace(/[\W_]+/g, '') : 'helloxxii',
			validate: 'oncreate',
		}),
};