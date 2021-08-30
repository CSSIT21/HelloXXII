const { genericError } = require('@utils/response');

module.exports = (app, opts, done) => {
	app.get('/', async (req, res) => {
		return Object.fromEntries(app.routes);
	});
	
	done();
};