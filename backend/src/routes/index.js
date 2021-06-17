const User = require('@models/User');
const {
	genericError
} = require('@util/response');

module.exports = (app, opts, done) => {

	app.get('/', async (req, res) => {
		console.log(thinky.r.Error);
		return {
			message: 'welcome to helloxxii'
		};
		try {
			return app.routes;
		} catch (e) {
			return genericError(e);
		}
	});

	done();
};