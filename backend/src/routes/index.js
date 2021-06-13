const User = require('@models/User');

module.exports = (app, opts, done) => {
	
	app.get('/', (req, res) => {
		User.execute().then((results) => {
			res.send(results);
		});
	});
	
	done();
};