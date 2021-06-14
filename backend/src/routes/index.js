const User = require('@models/User');

module.exports = (app, opts, done) => {
	
	app.get('/', async (req, res) => {
		await User.save({
			name: 'BHUMJATE SUDPRASERT',
			nickname: 'Thun',
			email: 'bhumjate.s@mail.kmutt.ac.th',
			avatar: 'aaa',
			usertype: 1,
		});
		User.execute().then((results) => {
			res.send(results);
		});
	});
	
	done();
};