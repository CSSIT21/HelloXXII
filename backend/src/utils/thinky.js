const thinky = require('thinky');
const { dev } = require('@utils/environment');

module.exports = {
	getThinkyInstance: () =>
		thinky({
			host: '10.5.55.11',
			log: false,
			db: dev ? 'helloxxii-beta' : 'helloxxii',
			validate: 'oncreate',
		}),
};