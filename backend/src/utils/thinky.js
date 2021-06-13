const thinky = require('thinky');

module.exports = {
	getThinkyInstance: () =>
		thinky({
			host: '10.5.55.11',
			log: false,
		}),
}