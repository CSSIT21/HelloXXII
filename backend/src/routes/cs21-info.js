const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const Insane = require('@models/Insane');

module.exports = (app, opts, done) => {
	app.get('/cs21/info', async (req, res) => {
		try {
			const { id, usertype } = jwt.verify(req.cookies.token, jwtConstants.secret);
			
			if (usertype === 1) {
				return {
					success: false,
					error: 4001,
					error_desc: 'Exclusively for CS21 only.',
				};
			}
			
			const document = await Insane.get(id);
			return {
				success: true,
				...document,
			};
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};