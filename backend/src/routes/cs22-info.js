const jwt = require('jsonwebtoken');
const jwtConstants = require('../constants/jwt.json');
const { url } = require('@utils/environment');
const { genericError, axiosError } = require('@utils/response');
const Senpai = require('@models/Senpai');
const Kohi = require('@models/Kohi');

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
			const document = await Kohi.get(id).run();
			
			// * Fetch hints from paired insane record of the user.
			const hints = new Promise((resolve) => {
				Insane.get(document.pair).run()
					.then((record) => resolve(record.hints.slice(0, document.attempts.length)))
					.catch(() => resolve([]));
			});
			
			return {
				paired: document.pair,
				found: document.found,
				quota_remaining: document.quota,
				quota_used: document.attempts.length,
				hints: hints,
			};
		} catch (e) {
			return genericError(e);
		}
	});
	
	done();
};