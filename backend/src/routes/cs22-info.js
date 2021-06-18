const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const Insane = require('@models/Insane');
const Noob = require('@models/Noob');

module.exports = (app, opts, done) => {
	app.get('/cs22/info', async (req, res) => {
		try {
			const { id, usertype } = jwt.verify(req.cookies.token, jwtConstants.secret);
			
			if (usertype !== 1) {
				return {
					success: false,
					error: 4001,
					error_desc: 'Exclusively for CS22 only.',
				};
			}
			
			// * Fetch noob record of the user.
			const document = await Noob.get(id).run();
			
			// * Fetch paired insane record of the user.
			const insane = new Promise((resolve, reject) => {
				Insane.get(document.pair).run()
					.then((record) => resolve(record))
					.catch((e) => reject({
						error: 4001,
						error_desc: 'User have never pair with mentor yet.',
					}));
			});
			
			return {
				quota_remaining: document.quota,
				quota_used: document.attempt.length,
				hints: insane.hints.slice(0, document.attempt.length),
			};
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};