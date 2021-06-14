const thinky = require('thinky');
const isDev = require('@utils/isDev');

module.exports = {
	getThinkyInstance: () =>
		thinky({
			host: '10.5.55.11',
			log: false,
			db: isDev ? 'helloxxii-beta' : 'helloxxii',
			validate: 'oncreate',
		}),
};