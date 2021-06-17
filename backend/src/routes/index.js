const User = require('@models/User');
const {
	genericError
} = require('@util/response');

module.exports = (app, opts, done) => {

	app.get('/', async (req, res) => {
		console.log(thinky.r.Error);
		try {
			return app.routes;
		} catch (e) {
			genericError(e);
		}
	});

	done();
};