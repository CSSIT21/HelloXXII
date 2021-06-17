const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');

module.exports = (app, opts, done) => {
	app.get('/account/profile', (req, res) => {
		try {
			const user = jwt.verify(req.cookies.token, jwtConstants.secret);
			
			return {
				success: true,
				profile: {
					avatar: url + '/account/photo/' + user.id,
					name: user.name,
					email: user.email,
					usertype: user.usertype,
				},
			};
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};